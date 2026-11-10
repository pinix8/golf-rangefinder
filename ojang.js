'use strict';
// 오장게임 (4인 타당) — 라운드에 붙는 추가 기능. index.html의 store·round()·course()·openSheet·box·esc·save·toast 사용
// 규칙 (2026-11-07 사용자 확정)
//  · 정산: 4명 중 모든 쌍(6쌍)끼리 보정 타수 차이 × 타당 금액 — 많이 친 사람이 적게 친 사람에게
//  · 타당 금액: 기본 1,000원 / 배판 2,000원 (프리셋 5천·1만, 1만·2만, 직접 수정)
//  · 배판(그 홀 바로, 조건이 몇 개든 배판 금액 하나): 파4·5 트리플보기 이상 / 파3 더블보기 이상 / 3명 이상 동타 / 버디 이상 1명
//    / (선택, 기본 켬) 앞 홀 4명 모두 동타면 다음 홀 자동 배판 / 배판 지정홀(1~18 아무 홀) — 곱하지 않고 배판 금액 적용
//  · 판 키우기(2번홀부터 아무 홀, ×2~×5 — 잃은 사람이 판을 키울 때)는 그 홀 금액(기본·배판)에 곱함
//  · 보정 타수(정산에만 사용, 배판 판정은 실제 타수): 버디 −1, 퍼터 이글 −3, 샷 이글 −5, 파3 니어 −1, 파5 롱기 −1 (모두 설정 가능, 롱기 0이면 안 씀)
const OJ_N = 4;
const OJ_DEFAULT = { names: ['나', '플레이어2', '플레이어3', '플레이어4'], won: 1000, wonDbl: 2000, tieNext: true,
  birdie: 1, eaglePutt: 3, eagleShot: 5, near: 1, long: 0, special: {}, force: {} };   // 롱기는 잘 안 써서 기본 0
const OJ_PRESETS = [[1000, 2000, '1천 / 2천'], [5000, 10000, '5천 / 1만'], [10000, 20000, '1만 / 2만']];
const OJ_MULTS = [1, 2, 3, 4, 5];
let ojCur = 0;   // 게임 화면에서 보고 있는 홀

// 오장게임 타수는 기본 화면의 내 타수와 별개 (오장게임만 쓰는 경우도 있음 — 2026-11-07 사용자 결정)
const ojBlankHole = () => ({ s: Array(OJ_N).fill(null), near: null, e: Array(OJ_N).fill(null) });
function ojNewGame(opt) {
  return { ...JSON.parse(JSON.stringify(OJ_DEFAULT)), ...opt, holes: Array.from({ length: 18 }, ojBlankHole) };
}

// 한 홀 계산: 4명 타수가 다 있어야 완료
function ojCalcHole(g, i, par) {
  const h = g.holes[i], s = h.s;
  if (s.some(x => !x)) return { done: false };
  const why = [];
  if (s.some(x => x >= par + (par === 3 ? 2 : 3))) why.push(par === 3 ? '더블보기 이상' : '트리플보기 이상');
  const cnt = {}; s.forEach(x => { cnt[x] = (cnt[x] || 0) + 1; });
  if (Object.values(cnt).some(c => c >= 3)) why.push(Math.max(...Object.values(cnt)) === 4 ? '4명 동타' : '3명 동타');
  if (s.some(x => x <= par - 1)) why.push(s.some(x => x <= par - 2) ? '이글' : '버디');
  if (g.tieNext && i > 0 && ojAllTied(g.holes[i - 1].s)) why.push('앞 홀 모두 동타');
  if (g.force && g.force[i]) why.push('배판 지정');
  const sp = i > 0 ? +g.special[i] || 1 : 1;
  const unit = (why.length ? g.wonDbl : g.won) * sp;   // 이 홀 1타 값(원)
  const adj = s.map((x, k) => {
    let a = x;
    const under = par - x;
    if (under === 1) a -= g.birdie;
    else if (under >= 2) a -= ojEagleType(g, i, k, par) === 'p' ? g.eaglePutt : g.eagleShot;
    if (par === 3 && h.near === k) a -= g.near;
    if (par === 5 && h.long === k) a -= g.long || 0;
    return a;
  });
  const sum = adj.reduce((t, v) => t + v, 0);
  const strokes = adj.map(a => sum - OJ_N * a);          // 모든 쌍 차이의 합(타) — 양수 = 받음
  return { done: true, why, sp, unit, adj, strokes, delta: strokes.map(t => t * unit) };
}
const ojAllTied = s => s.every(x => x) && s.every(x => x === s[0]);
// 이글 종류 기본값: 파3(홀인원)은 샷 이글, 그 외는 퍼터 이글 — 화면에서 바꿀 수 있음
function ojEagleType(g, i, k, par) { return g.holes[i].e[k] || (par === 3 ? 's' : 'p'); }

function ojCalc(g, pars) {
  const holes = pars.map((p, i) => ojCalcHole(g, i, p));
  const total = Array(OJ_N).fill(0);
  holes.forEach(r => { if (r.done) r.delta.forEach((d, k) => { total[k] += d; }); });
  return { holes, total, played: holes.filter(r => r.done).length };
}

// ---------- 화면 ----------
const ojPars = c => c.holes.map(h => h.par);
const ojSign = v => (v > 0 ? '+' : '') + v;
const ojMoney = v => (v > 0 ? '+' : '') + v.toLocaleString('ko-KR');
const ojCls = v => v > 0 ? 'under' : v < 0 ? 'over' : '';
function ojRender(html) { const y = box.scrollTop; openSheet(html); box.scrollTop = y; }

function ojOpen() {
  if (!round() || !course()) { toast('먼저 라운드를 시작하세요'); return; }
  if (!round().game) { ojSetup(); return; }
  ojCur = holeIdx(); ojHole();
}

function ojSetup() {
  const g = round().game || OJ_DEFAULT, c = course();
  const sp = Object.entries(g.special || {}).filter(([, m]) => m > 1);
  const num = (id, v, step = 1) => `<input type="number" id="${id}" value="${v}" min="0" step="${step}" inputmode="numeric" style="font:inherit;background:var(--btn);color:var(--text);border:1px solid var(--line);border-radius:8px;padding:8px;width:100%;box-sizing:border-box">`;
  ojRender(`${gameTabs('ojang')}<h3>🎲 오장게임 설정</h3>
    <p class="muted">4명 타당 게임 — 홀마다 모든 쌍끼리 타수 차이 × 타당 금액. 배판 조건(파4·5 트리플 이상, 파3 더블 이상, 3명 동타, 버디·이글)이 나오면 그 홀은 배판 금액.</p>
    <b>플레이어</b>
    ${g.names.map((n, k) => `<div class="row"><span style="flex:0 0 22px">${k + 1}</span><input type="text" id="ojName${k}" value="${esc(n)}" maxlength="8"></div>`).join('')}
    <b>타당 금액</b>
    <div class="row">${OJ_PRESETS.map(([a, b, l]) => `<button data-g="preset" data-a="${a}" data-b="${b}" class="${g.won === a && g.wonDbl === b ? 'on' : ''}" style="padding:8px 2px;font-size:13px">${l}</button>`).join('')}</div>
    <div class="row"><span>기본 1타 (원)</span>${num('ojWon', g.won, 500)}</div>
    <div class="row"><span>배판 1타 (원)</span>${num('ojWonDbl', g.wonDbl, 500)}</div>
    <label class="row" style="cursor:pointer"><input type="checkbox" id="ojTieNext" ${g.tieNext ? 'checked' : ''} style="flex:0 0 22px;height:22px">
      <span>앞 홀에서 4명 모두 동타면 다음 홀 자동 배판</span></label>
    <b>보너스 (정산 때 이만큼 적게 친 것으로)</b>
    <div class="row"><span>버디 (모든 홀)</span>${num('ojBirdie', g.birdie)}</div>
    <div class="row"><span>퍼터 이글</span>${num('ojEP', g.eaglePutt)}</div>
    <div class="row"><span>샷 이글</span>${num('ojES', g.eagleShot)}</div>
    <div class="row"><span>파3 니어</span>${num('ojNear', g.near)}</div>
    <div class="row"><span>파5 롱기 <small class="muted">(0=안 씀 · 쓸 때 1)</small></span>${num('ojLong', g.long == null ? 0 : g.long)}</div>
    <b>배판 지정홀</b> <span class="muted">— 누른 홀은 배판 사유가 없어도 배판 금액 (홀 화면에서도 변경 가능)</span>
    <div class="holegrid" style="grid-template-columns:repeat(6,1fr);margin:6px 0">${c.holes.map((_, i) => `<button data-g="force" data-i="${i}" class="${g.force && g.force[i] ? 'on' : ''}" style="padding:8px 0">${i + 1}</button>`).join('')}</div>
    <b>판 키우기</b> <span class="muted">— 2번홀부터 홀 입력 화면에서 ×2~×5 선택 (배판이면 배판 금액에 곱함)</span>
    <p class="muted" style="margin:4px 0">${sp.length ? '현재: ' + sp.map(([i, m]) => `${+i + 1}번홀 ×${m}`).join(', ') : '현재 키운 홀 없음'}</p>
    <div class="list"><button data-g="save" class="primary">${round().game ? '💾 설정 저장' : '▶ 게임 시작'}</button>
      ${round().game ? '<button data-g="hole">← 게임 화면으로</button><button data-g="reset">🗑️ 게임 기록 지우기</button>' : ''}
      <button data-act="close">닫기</button></div>`);
}

function ojSaveSetup() {
  const v = id => document.getElementById(id).value;
  const names = Array.from({ length: OJ_N }, (_, k) => v('ojName' + k).trim() || `플레이어${k + 1}`);
  const force = {}; box.querySelectorAll('[data-g="force"].on').forEach(b => { force[b.dataset.i] = true; });
  const won = Math.max(0, +v('ojWon') || 0), wonDbl = Math.max(0, +v('ojWonDbl') || 0);
  if (!won || !wonDbl) { toast('타당 금액을 입력하세요'); return; }
  const opt = { names, won, wonDbl, tieNext: document.getElementById('ojTieNext').checked, birdie: +v('ojBirdie') || 0,
    eaglePutt: +v('ojEP') || 0, eagleShot: +v('ojES') || 0, near: +v('ojNear') || 0, long: +v('ojLong') || 0, force };
  const rd = round();
  if (rd.game) Object.assign(rd.game, opt);
  else { rd.game = ojNewGame(opt); ojCur = holeIdx(); }
  save(); toast('오장게임 설정을 저장했습니다'); ojHole();
}

function ojHole() {
  const rd = round(), g = rd.game, c = course(), i = ojCur, par = c.holes[i].par, h = g.holes[i];
  const all = ojCalc(g, ojPars(c)), r = all.holes[i];
  const sp = i > 0 ? +g.special[i] || 1 : 1;
  const tag = [g.tieNext && i > 0 && ojAllTied(g.holes[i - 1].s) ? '앞 홀 모두 동타 → 배판' : '', g.force && g.force[i] ? '배판 지정홀' : '', sp > 1 ? `판 ×${sp}` : ''].filter(Boolean).join(' · ');
  const multRow = i > 0 ? `<div class="row"><span class="muted" style="flex:0 0 auto">판 키우기</span>
    ${OJ_MULTS.map(m => `<button data-g="mult" data-m="${m}" class="${sp === m ? 'on' : ''}" style="padding:8px 2px">${m === 1 ? '기본' : '×' + m}</button>`).join('')}</div>` : '';
  const forceRow = `<div class="row"><span class="muted" style="flex:0 0 auto">이 홀 배판</span>
    <button data-g="forceHole" data-v="0" class="${g.force && g.force[i] ? '' : 'on'}" style="padding:8px 2px">자동 판정</button>
    <button data-g="forceHole" data-v="1" class="${g.force && g.force[i] ? 'on' : ''}" style="padding:8px 2px">배판 지정</button></div>`;
  const rows = g.names.map((n, k) => {
    const s = h.s[k], under = s ? par - s : 0;
    return `<div class="counter" style="margin:6px 0;padding:6px 10px">
      <span style="flex:1">${esc(n)}${par === 3 && h.near === k ? ' 📍' : ''}${par === 5 && h.long === k ? ' 🚀' : ''}</span>
      <button data-g="s" data-k="${k}" data-d="-1">−</button><b style="min-width:2.2em;text-align:center">${s || '—'}</b><button data-g="s" data-k="${k}" data-d="1">＋</button>
      <span class="muted" style="flex:0 0 3.6em;text-align:right">${s ? (under >= 2 ? '이글' : under === 1 ? '버디' : ojSign(-under)) : ''}</span></div>
      ${s && under >= 2 ? `<div class="row" style="margin:0 0 6px"><span class="muted" style="flex:0 0 auto">${esc(n)} 이글</span>
        ${['p', 's'].map(t => `<button data-g="eg" data-k="${k}" data-t="${t}" class="${ojEagleType(g, i, k, par) === t ? 'on' : ''}">${t === 'p' ? '퍼터 이글' : '샷 이글'}</button>`).join('')}</div>` : ''}`;
  }).join('');
  const nearRow = par === 3 ? `<div class="row"><span class="muted" style="flex:0 0 auto">니어</span>
    ${g.names.map((n, k) => `<button data-g="near" data-k="${k}" class="${h.near === k ? 'on' : ''}" style="padding:8px 4px">${esc(n)}</button>`).join('')}
    <button data-g="near" data-k="-1" class="${h.near == null ? 'on' : ''}" style="padding:8px 4px">없음</button></div>`
    : par === 5 && g.long ? `<div class="row"><span class="muted" style="flex:0 0 auto">롱기</span>
    ${g.names.map((n, k) => `<button data-g="long" data-k="${k}" class="${h.long === k ? 'on' : ''}" style="padding:8px 4px">${esc(n)}</button>`).join('')}
    <button data-g="long" data-k="-1" class="${h.long == null ? 'on' : ''}" style="padding:8px 4px">없음</button></div>` : '';
  const result = r.done ? `<div style="background:#0d2016;border-radius:10px;padding:8px 10px;margin-top:8px">
      <b>${r.why.length ? '🔥 배판' : '기본'} · 1타 ${r.unit.toLocaleString('ko-KR')}원</b> <span class="muted">${[r.why.length ? r.why.join(', ') : '', r.sp > 1 ? `판 ×${r.sp}` : ''].filter(Boolean).join(' · ')}</span>
      <table class="card" style="margin-top:6px"><tr><th>이름</th><th>타수</th><th>보정</th><th>이번 홀</th><th>누적</th></tr>
      ${g.names.map((n, k) => `<tr><td>${esc(n)}</td><td>${h.s[k]}</td><td>${r.adj[k]}</td><td class="${ojCls(r.delta[k])}">${ojMoney(r.delta[k])}</td><td><b class="${ojCls(all.total[k])}">${ojMoney(all.total[k])}</b></td></tr>`).join('')}
      </table><p class="muted" style="margin:4px 0 0">단위: 원 (＋받음 / −냄)</p></div>`
    : `<p class="muted">4명 타수를 모두 넣으면 자동 계산됩니다. 「−/＋」를 처음 누르면 파(${par})로 들어갑니다.</p>`;
  ojRender(`${gameTabs('ojang')}<div class="row" style="flex-wrap:nowrap"><button data-g="go" data-d="-1" style="flex:0 0 44px">◀</button>
      <h3 style="margin:0;text-align:center">🎲 ${i + 1}번홀 · Par ${par}${tag ? `<br><small style="color:var(--warn)">${tag}</small>` : ''}</h3>
      <button data-g="go" data-d="1" style="flex:0 0 44px">▶</button></div>
    ${rows}${nearRow}${forceRow}${multRow}
    <div class="row"><button data-g="parAll">빈칸 모두 파</button><button data-g="clr">이 홀 지우기</button></div>
    ${result}
    <div class="list">${r.done && i < 17 ? '<button data-g="go" data-d="1" class="primary">다음 홀 ▶</button>' : ''}
      <button data-g="tbl">📊 전체 정산표 (${all.played}/18홀)</button>
      <button data-g="setup">⚙️ 게임 설정 (이름·금액·보너스)</button>
      <button data-act="close">닫기</button></div>`);
}

function ojTable(rd, c, hi) {
  const g = rd.game, all = ojCalc(g, ojPars(c));
  const body = all.holes.map((r, i) => `<tr ${hi == null ? `data-g="goHole" data-i="${i}" style="cursor:pointer"` : ''}><td>${i + 1}</td><td>${c.holes[i].par}</td>
    <td>${r.done ? `<span style="${r.unit !== g.won ? 'color:var(--warn);font-weight:700' : ''}">${(r.unit / 1000).toLocaleString('ko-KR')}</span>` : ''}</td>
    ${g.names.map((_, k) => `<td>${r.done ? `${g.holes[i].s[k]}<br><span class="${ojCls(r.delta[k])}">${ojMoney(r.delta[k] / 1000)}</span>` : ''}</td>`).join('')}</tr>`).join('');
  openSheet(`${hi == null ? gameTabs('ojang') : ''}<h3>📊 오장 정산표 · ${esc(c.name)}</h3><p class="muted">${new Date(rd.date).toLocaleDateString('ko-KR')} · ${all.played}/18홀 계산 · 단위 천원 · 칸: 타수 / 주고받은 금액</p>
    <table class="card"><tr><th>홀</th><th>Par</th><th>1타</th>${g.names.map(n => `<th>${esc(n)}</th>`).join('')}</tr>${body}
    <tr class="sum"><td colspan="3">합계</td>${all.total.map(t => `<td>${ojMoney(t / 1000)}</td>`).join('')}</tr></table>
    <div style="margin-top:8px;font-size:16px">${g.names.map((n, k) => `<div>${esc(n)}: <b class="${ojCls(all.total[k])}">${ojMoney(all.total[k])}원</b></div>`).join('')}</div>
    <p class="muted">＋는 받을 금액, −는 낼 금액 (합계 0). ${hi == null ? '홀을 누르면 그 홀 입력 화면으로 갑니다.' : ''}</p>
    <div class="list">${hi == null ? '<button data-g="hole">← 게임 화면으로</button>' : `<button data-act="histCard" data-id="${hi}">← 스코어카드로</button>`}<button data-act="close">닫기</button></div>`);
}

box.addEventListener('click', e => {
  const t = e.target.closest('[data-g]'); if (!t) return;
  const a = t.dataset.g, rd = round(), g = rd && rd.game;
  if (a === 'histTbl') { const h = store.history[+t.dataset.i]; ojTable(h, h.courseSnapshot, +t.dataset.i); return; }
  if (!rd) return;
  if (a === 'preset') { document.getElementById('ojWon').value = t.dataset.a; document.getElementById('ojWonDbl').value = t.dataset.b;
    box.querySelectorAll('[data-g="preset"]').forEach(b => b.classList.toggle('on', b === t)); return; }
  if (a === 'force') { t.classList.toggle('on'); return; }
  if (a === 'save') { ojSaveSetup(); return; }
  if (a === 'setup') { ojSetup(); return; }
  if (!g) return;
  const par = course().holes[ojCur].par, h = g.holes[ojCur];
  if (a === 'hole') ojHole();
  else if (a === 'tbl') ojTable(rd, course());
  else if (a === 'goHole') { ojCur = +t.dataset.i; ojHole(); }
  else if (a === 'go') { ojCur = (ojCur + +t.dataset.d + 18) % 18; ojHole(); }
  else if (a === 's') { const k = +t.dataset.k; h.s[k] = h.s[k] ? Math.max(1, Math.min(15, h.s[k] + +t.dataset.d)) : par; save(); ojHole(); }
  else if (a === 'near') { const k = +t.dataset.k; h.near = k < 0 ? null : k; save(); ojHole(); }
  else if (a === 'long') { const k = +t.dataset.k; h.long = k < 0 ? null : k; save(); ojHole(); }
  else if (a === 'forceHole') { g.force = g.force || {}; if (t.dataset.v === '1') g.force[ojCur] = true; else delete g.force[ojCur]; save(); ojHole(); }
  else if (a === 'mult') { const m = +t.dataset.m; if (m > 1) g.special[ojCur] = m; else delete g.special[ojCur]; save(); ojHole(); }
  else if (a === 'eg') { h.e[+t.dataset.k] = t.dataset.t; save(); ojHole(); }
  else if (a === 'parAll') { h.s = h.s.map(x => x || par); save(); ojHole(); }
  else if (a === 'clr') { g.holes[ojCur] = ojBlankHole(); save(); ojHole(); }
  else if (a === 'reset') { if (confirm('오장게임 기록과 설정을 모두 지울까요? (라운드 스코어는 그대로)')) { delete rd.game; save(); closeSheet(); toast('오장게임 기록을 지웠습니다'); } }
});
