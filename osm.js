'use strict';
// OpenStreetMap(Overpass) 골프 데이터 → 9홀 단위 코스(파·티·그린 앞/중/뒤)로 변환.
// 브라우저에서는 window.GolfOSM, Node 테스트에서는 module.exports 로 사용.
(function (root) {
  const OVERPASS = [
    'https://overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
    'https://overpass.private.coffee/api/interpreter'
  ];
  const KR_BBOX = '33,124.5,38.7,131.9';
  const SUFFIX = /(컨트리\s*클럽|골프\s*클럽|골프\s*장|골프\s*리조트|리조트|c\.?\s*c|g\.?\s*c|country\s*club|golf\s*club)$/i;

  async function overpass(query, timeoutMs = 25000) {
    let lastErr = null;
    for (const url of OVERPASS) {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), timeoutMs);
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: 'data=' + encodeURIComponent(query),
          signal: ctl.signal
        });
        if (res.ok) return (await res.json()).elements || [];
        lastErr = new Error('HTTP ' + res.status);
      } catch (e) {
        lastErr = e;
      } finally {
        clearTimeout(timer);
      }
    }
    throw lastErr || new Error('OSM 서버 응답 없음');
  }

  // "남서울CC" → 남서울, 공백 유무와 무관하게 매칭되는 정규식
  function nameRegex(input) {
    const core = String(input).trim().replace(SUFFIX, '').replace(/\s+/g, '');
    if (!core) return null;
    return [...core].map(ch => ch.replace(/[.*+?^${}()|[\]\\"]/g, '\\$&')).join(' ?');
  }

  async function searchCourses(input) {
    const rx = nameRegex(input);
    if (!rx) return [];
    const q = `[out:json][timeout:25];
(nwr["leisure"="golf_course"]["name"~"${rx}",i](${KR_BBOX});
 nwr["leisure"="golf_course"]["alt_name"~"${rx}",i](${KR_BBOX});
 nwr["leisure"="golf_course"]["name:ko"~"${rx}",i](${KR_BBOX}););
out tags center bb;`;
    const els = await overpass(q);
    const seen = new Set();
    return els.filter(e => {
      const k = e.type + '/' + e.id;
      if (seen.has(k)) return false;
      seen.add(k); return true;
    }).map(e => {
      const b = e.bounds || (e.center
        ? { minlat: e.center.lat - 0.008, maxlat: e.center.lat + 0.008, minlon: e.center.lon - 0.01, maxlon: e.center.lon + 0.01 }
        : { minlat: e.lat - 0.008, maxlat: e.lat + 0.008, minlon: e.lon - 0.01, maxlon: e.lon + 0.01 });
      return { id: e.type + '/' + e.id, name: e.tags.name || e.tags['name:ko'] || '(이름 없음)', bounds: b };
    }).sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  }

  async function fetchCourseFeatures(bounds) {
    const m = 0.002;
    const bb = [bounds.minlat - m, bounds.minlon - m, bounds.maxlat + m, bounds.maxlon + m].join(',');
    const q = `[out:json][timeout:25];
(way["golf"="hole"](${bb}); way["golf"="green"](${bb}););
out tags geom;`;
    return overpass(q);
  }

  // ---------- 기하 ----------
  function haversine(a, b) {
    const R = 6371008.8, rad = Math.PI / 180;
    const dLat = (b[0] - a[0]) * rad, dLng = (b[1] - a[1]) * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  // 그린 크기(수십 m) 범위에서는 평면 근사로 충분
  function projector(origin) {
    const kx = Math.cos(origin[0] * Math.PI / 180) * 111320, ky = 110540;
    return {
      to: p => [(p[1] - origin[1]) * kx, (p[0] - origin[0]) * ky],
      from: xy => [origin[0] + xy[1] / ky, origin[1] + xy[0] / kx]
    };
  }
  function inside(pt, poly) {
    let hit = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i], [xj, yj] = poly[j];
      if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi) hit = !hit;
    }
    return hit;
  }
  function centroid(poly) {
    let a = 0, cx = 0, cy = 0;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const f = poly[j][0] * poly[i][1] - poly[i][0] * poly[j][1];
      a += f; cx += (poly[j][0] + poly[i][0]) * f; cy += (poly[j][1] + poly[i][1]) * f;
    }
    if (Math.abs(a) < 1e-9) {
      const n = poly.length;
      return [poly.reduce((s, p) => s + p[0], 0) / n, poly.reduce((s, p) => s + p[1], 0) / n];
    }
    return [cx / (3 * a), cy / (3 * a)];
  }

  // 홀 끝점·진행방향으로 그린 앞/중/뒤 계산 (그린 폴리곤 없으면 끝점=중앙)
  function greenPoints(hole, greens) {
    const end = hole.end, prj = projector(end);
    const e = [0, 0], pv = prj.to(hole.prev);
    let ux = e[0] - pv[0], uy = e[1] - pv[1];
    const len = Math.hypot(ux, uy) || 1; ux /= len; uy /= len;
    let best = null, bestD = Infinity;
    for (const g of greens) {
      const poly = g.map(prj.to);
      if (inside(e, poly)) { best = poly; bestD = 0; break; }
      const c = centroid(poly), d = Math.hypot(c[0], c[1]);
      if (d < bestD && d < 45) { best = poly; bestD = d; }
    }
    if (!best) return { c: end, f: null, b: null };
    const c = centroid(best);
    let tmin = 0, tmax = 0;
    for (const v of best) {
      const t = (v[0] - c[0]) * ux + (v[1] - c[1]) * uy;
      tmin = Math.min(tmin, t); tmax = Math.max(tmax, t);
    }
    const at = t => prj.from([c[0] + ux * t, c[1] + uy * t]);
    return { c: prj.from(c), f: tmin < -2 ? at(tmin) : null, b: tmax > 2 ? at(tmax) : null };
  }

  // ---------- 홀 해석 ----------
  function lastNumber(s) {
    const m = String(s || '').match(/(\d+)(?!.*\d)/);
    return m ? +m[1] : null;
  }
  function cleanLabel(s) {
    const t = String(s || '').replace(/\d+/g, ' ')
      .replace(/\b(hole|no)\b|홀|번|#/gi, ' ')
      .replace(/[\s\-_.:()/]+/g, ' ').trim();
    return /^코스$/.test(t) ? '' : t;
  }
  function parseHole(w) {
    const t = w.tags || {};
    const pts = (w.geometry || []).map(g => [g.lat, g.lon]);
    if (pts.length < 2) return null;
    const num = lastNumber(t.ref) ?? lastNumber(t.name);
    const label = cleanLabel(t.name) || cleanLabel(t.ref);
    const par = +t.par;
    return {
      num, label, par: par >= 3 && par <= 6 ? par : null,
      tee: pts[0], end: pts[pts.length - 1], prev: pts[pts.length - 2]
    };
  }
  function sameHole(a, b) { return haversine(a.tee, b.tee) < 30 && haversine(a.end, b.end) < 30; }
  function richness(h) { return (h.label ? 2 : 0) + (h.par ? 1 : 0) + (h.num ? 1 : 0); }

  // 번호만 있고 코스 이름이 없는 중복 홀: "앞 홀 그린 근처에서 다음 홀 티 시작"으로 줄을 이어 9홀 묶음 생성
  function chainNines(holes) {
    const byNum = {};
    holes.forEach(h => { (byNum[h.num] = byNum[h.num] || []).push(h); });
    const chains = (byNum[1] || []).map(h => [h]);
    for (let n = 2; n <= 9; n++) {
      const pool = (byNum[n] || []).slice();
      const pairs = [];
      chains.forEach((ch, ci) => pool.forEach((h, hi) => pairs.push({ ci, hi, d: haversine(ch[ch.length - 1].end, h.tee) })));
      pairs.sort((a, b) => a.d - b.d);
      const usedC = new Set(), usedH = new Set();
      for (const p of pairs) {
        if (usedC.has(p.ci) || usedH.has(p.hi)) continue;
        chains[p.ci].push(pool[p.hi]); usedC.add(p.ci); usedH.add(p.hi);
      }
    }
    return chains;
  }

  function buildNines(elements, bounds) {
    const inB = p => !bounds || (p[0] >= bounds.minlat && p[0] <= bounds.maxlat && p[1] >= bounds.minlon && p[1] <= bounds.maxlon);
    const greens = elements.filter(e => e.tags && e.tags.golf === 'green' && e.geometry && e.geometry.length > 3)
      .map(e => e.geometry.map(g => [g.lat, g.lon]));
    let holes = elements.filter(e => e.tags && e.tags.golf === 'hole').map(parseHole)
      .filter(h => h && h.num && h.num >= 1 && h.num <= 36 && (inB(h.tee) || inB(h.end)));

    // 같은 홀이 두 번 그려진 경우 정보가 많은 쪽만 남김
    holes.sort((a, b) => richness(b) - richness(a));
    holes = holes.filter((h, i) => !holes.slice(0, i).some(o => sameHole(o, h)));

    const groups = new Map();
    const add = (label, h) => { if (!groups.has(label)) groups.set(label, []); groups.get(label).push(h); };
    holes.filter(h => h.label).forEach(h => add(h.label, h));

    const plain = holes.filter(h => !h.label);
    const nums = plain.map(h => h.num);
    const unique = new Set(nums).size === nums.length;
    if (plain.length && unique && nums.every(n => n <= 18)) {
      const two = nums.some(n => n > 9);
      plain.forEach(h => add(two ? (h.num <= 9 ? '전반' : '후반') : '코스', h));
    } else if (plain.length) {
      const small = plain.filter(h => h.num <= 9);
      chainNines(small).forEach((ch, i) => ch.forEach(h => add(String.fromCharCode(65 + i) + '코스', h)));
    }

    const nines = [];
    for (const [label, hs] of groups) {
      const slots = new Array(9).fill(null);
      let minNum = Infinity;
      hs.sort((a, b) => a.num - b.num).forEach(h => {
        const k = (h.num - 1) % 9;
        minNum = Math.min(minNum, h.num);
        if (!slots[k]) slots[k] = h;
      });
      const filled = slots.filter(Boolean);
      if (filled.length < 3) continue;
      nines.push({
        label, minNum,
        holes: slots.map(h => h ? { par: h.par, tee: h.tee, green: greenPoints(h, greens), hasPolygon: null } : null)
      });
    }
    nines.sort((a, b) => a.minNum - b.minNum || a.label.localeCompare(b.label, 'ko'));
    nines.forEach(n => {
      n.count = n.holes.filter(Boolean).length;
      n.parCount = n.holes.filter(h => h && h.par).length;
      n.par = n.holes.reduce((s, h) => s + (h && h.par ? h.par : 0), 0);
      n.greenFB = n.holes.filter(h => h && h.green.f && h.green.b).length;
      n.holes.forEach(h => { if (h) delete h.hasPolygon; });
      delete n.minNum;
    });
    return nines;
  }

  // 전반/후반 9홀을 앱의 18홀 코스 형식으로 합침
  function toCourseHoles(front, back) {
    return [front, back].flatMap(n => n.holes.map(h => ({
      par: h && h.par ? h.par : 4,
      tee: h ? h.tee : null,
      green: h ? { c: h.green.c, f: h.green.f, b: h.green.b } : null
    })));
  }

  const api = { searchCourses, fetchCourseFeatures, buildNines, toCourseHoles, nameRegex, overpass };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.GolfOSM = api;
})(typeof window !== 'undefined' ? window : this);
