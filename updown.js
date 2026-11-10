'use strict';
// 팀 업다운 — 2팀 매홀 승부. 승패 판정은 골퍼가 직접(홀마다 이긴 팀 버튼), 앱은 UP 표시·누적만
// rd.updown = { teams: ['1팀', '2팀'], w: [18개: 0 | 1 | 'h'(비김) | null] }
const UD_DEFAULT_TEAMS = ['1팀', '2팀'];

function udRun(u) {   // 홀마다 누적 상태
  let a = 0, b = 0;
  return u.w.map(x => {
    if (x === 0) a++; else if (x === 1) b++;
    return { a, b, diff: a - b, set: x != null };
  });
}
function udLabel(u, d) {
  if (!d) return 'AS';
  return `${esc(u.teams[d > 0 ? 0 : 1])} ${Math.abs(d)}UP`;
}

function udOpen() {
  if (!round() || !course()) { toast('먼저 라운드를 시작하세요'); return; }
  const rd = round();
  if (!rd.updown) { rd.updown = { teams: UD_DEFAULT_TEAMS.slice(), w: Array(18).fill(null) }; save(); }
  udSheet(rd, course());
}

function udSheet(rd, c, hi) {   // hi: 지난 라운드 인덱스(있으면 보기 전용)
  const u = rd.updown, run = udRun(u), live = hi == null, cur = live ? holeIdx() : -1;
  const last = [...run].reverse().find(r => r.set);
  const btn = (i, v, label) => live
    ? `<button data-ud="w" data-i="${i}" data-v="${v}" class="${u.w[i] === v ? 'on' : ''}" style="padding:6px 2px;font-size:13px;width:100%">${label}</button>`
    : (u.w[i] === v ? `<b>${label}</b>` : '');
  const rows = c.holes.map((h, i) => `<tr style="${i === cur ? 'outline:2px solid var(--accent)' : ''}"><td>${i + 1}</td><td>${h.par}</td>
    <td>${btn(i, 0, u.w[i] === 0 ? 'UP' : '이김')}</td><td>${btn(i, 1, u.w[i] === 1 ? 'UP' : '이김')}</td><td>${btn(i, 'h', '비김')}</td>
    <td style="white-space:nowrap">${run[i].set ? `<b class="${run[i].diff ? 'under' : ''}">${udLabel(u, run[i].diff)}</b>` : ''}</td></tr>`
    + (i === 8 ? `<tr class="sum"><td colspan="6">전반 ${run[8].a}승 / ${run[8].b}승 · ${udLabel(u, run[8].diff)}</td></tr>` : '')).join('');
  const team = k => live ? `<input type="text" data-ud="team" data-k="${k}" value="${esc(u.teams[k])}" maxlength="8" style="width:100%;box-sizing:border-box;padding:6px">` : esc(u.teams[k]);
  const y = box.scrollTop;
  openSheet(`${live ? gameTabs('updown') : ''}<h3>🤝 팀 업다운 · ${esc(c.name)}</h3>
    <div class="row"><span style="flex:0 0 auto" class="muted">팀명</span>${team(0)}<span style="flex:0 0 auto">vs</span>${team(1)}</div>
    <div style="background:#0d2016;border-radius:10px;padding:8px 10px;margin:6px 0;font-size:17px;text-align:center">
      ${last ? `<b>${udLabel(u, last.diff)}</b> <span class="muted">(${esc(u.teams[0])} ${last.a}승 · ${esc(u.teams[1])} ${last.b}승)</span>` : '<span class="muted">홀마다 이긴 팀을 누르세요</span>'}</div>
    <table class="card"><tr><th>홀</th><th>Par</th><th>${esc(u.teams[0])}</th><th>${esc(u.teams[1])}</th><th>비김</th><th>누적</th></tr>${rows}
    <tr class="sum"><td colspan="6">합계 ${run[17].a}승 / ${run[17].b}승 · ${udLabel(u, run[17].diff)}</td></tr></table>
    <p class="muted">${live ? '이긴 팀 칸을 누르면 그 홀에 UP 표시, 다시 누르면 지워집니다. 누적은 (이긴 홀 수 차이)UP, 같으면 AS. ' : ''}</p>
    <div class="list">${live ? '<button data-ud="reset">🗑️ 업다운 기록 지우기</button>' : `<button data-act="histCard" data-id="${hi}">← 스코어카드로</button>`}
      <button data-act="close">닫기</button></div>`);
  box.scrollTop = y;
}

box.addEventListener('click', e => {
  const t = e.target.closest('[data-ud]'); if (!t) return;
  const a = t.dataset.ud;
  if (a === 'hist') { const h = store.history[+t.dataset.i]; udSheet(h, h.courseSnapshot, +t.dataset.i); return; }
  const rd = round(); if (!rd || !rd.updown) return;
  if (a === 'w') {
    const i = +t.dataset.i, v = t.dataset.v === 'h' ? 'h' : +t.dataset.v;
    rd.updown.w[i] = rd.updown.w[i] === v ? null : v; save(); udSheet(rd, course());
  } else if (a === 'reset') {
    if (confirm('팀 업다운 기록을 모두 지울까요? (팀명 포함)')) { delete rd.updown; save(); closeSheet(); toast('팀 업다운 기록을 지웠습니다'); }
  }
});
box.addEventListener('change', e => {
  const t = e.target; if (t.dataset.ud !== 'team') return;
  const rd = round(); if (!rd || !rd.updown) return;
  rd.updown.teams[+t.dataset.k] = t.value.trim() || UD_DEFAULT_TEAMS[+t.dataset.k]; save(); udSheet(rd, course());
});
