'use strict';
// 회원 로그인(이름+비밀번호) · 골프장 파 DB 서버 연동 · 관리자 기능 — Supabase
// 회원: 관리자가 이름을 등록 → 그 이름으로 처음 접속 시 비밀번호 설정 → 이후 이름+비밀번호 로그인
// 데이터: courses 테이블(로그인 회원만 읽기, 관리자만 쓰기). 오프라인용으로 휴대폰에 캐시
(function () {
  const SB_URL = 'https://biuskvyzlqgttamlppft.supabase.co';
  const SB_KEY = 'sb_publishable_9vmr-xG_KRhZ6i3m7Nc2_g_qyWBqiow';   // 공개용 키(RLS로 보호) — secret 키는 절대 넣지 말 것
  const DB_CACHE = 'golfRangefinder.db', ME_KEY = 'golfRangefinder.me';

  const readJson = k => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  const writeJson = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 저장공간 부족 */ } };
  const emailOf = n => 'u' + [...new TextEncoder().encode(n)].map(b => b.toString(16).padStart(2, '0')).join('') + '@example.com';
  const sb = window.supabase ? window.supabase.createClient(SB_URL, SB_KEY, { auth: { persistSession: true, autoRefreshToken: true } }) : null;
  let me = readJson(ME_KEY);   // { name, role }

  // ---------- 로그인 화면 ----------
  const gate = document.createElement('div');
  gate.style.cssText = 'position:fixed;inset:0;z-index:5000;background:var(--bg);display:flex;align-items:center;justify-content:center;padding:16px';
  document.body.appendChild(gate);
  const card = inner => { gate.innerHTML = `<div style="width:100%;max-width:360px;background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:20px">
    <h2 style="margin:0 0 4px">⛳ 골프 거리측정</h2>${inner}</div>`; gate.style.display = 'flex'; };
  const field = (id, ph, type = 'text') => `<input id="${id}" type="${type}" placeholder="${ph}" autocomplete="off"
    style="width:100%;font:inherit;background:var(--btn);color:var(--text);border:1px solid var(--line);border-radius:8px;padding:10px;margin:6px 0">`;
  const msgHtml = m => m ? `<p style="color:var(--warn);font-size:14px">${esc(m)}</p>` : '';

  function gateName(msg) {
    card(`<p class="muted">관리자가 등록한 이름으로 로그인합니다.</p>${field('gName', '이름')}${msgHtml(msg)}
      <button class="primary" id="gNext" style="width:100%;margin-top:6px">다음</button>`);
    const inp = document.getElementById('gName');
    inp.value = (me && me.name) || '';
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') nameNext(); });
    document.getElementById('gNext').onclick = nameNext;
    setTimeout(() => inp.focus(), 50);
  }
  async function nameNext() {
    const name = document.getElementById('gName').value.trim();
    if (!name) return;
    if (!sb) return gateName('인터넷 연결 후 다시 시도하세요');
    const { data, error } = await sb.rpc('member_status', { n: name });
    if (error) return gateName('서버에 연결하지 못했습니다. 인터넷 연결을 확인하세요');
    if (!data) return gateName(`「${name}」은(는) 등록되지 않은 이름입니다. 관리자에게 등록을 요청하세요`);
    if (data !== 'new') return gatePw(name, false);
    const st = await requestCode(name, false);
    gatePw(name, true, st === 'error' ? '가입 코드 요청에 실패했습니다. 「코드 다시 요청」을 누르세요' : '', st !== 'legacy');
  }
  // 가입 코드: 서버가 6자리 코드를 만들고 Edge Function이 관리자 카톡으로 발송 → 관리자가 회원에게 알려 줌
  // 반환: 'sent' | 'exists' | 'wait' | 'invalid' | 'error' | 'legacy'(서버에 가입 코드 기능이 아직 없음)
  async function requestCode(name, again) {
    const { data, error } = await sb.rpc('request_signup_code', { n: name, again });
    if (error) return /request_signup_code|function|schema cache/i.test(error.message) ? 'legacy' : 'error';
    if (data === 'sent') {
      fetch(SB_URL + '/functions/v1/kakao-notify', { method: 'POST', headers: { 'Content-Type': 'application/json', apikey: SB_KEY },
        body: JSON.stringify({ name }) }).catch(() => {});   // 카톡 실패해도 관리자 화면에서 코드 확인 가능
    }
    return data;
  }
  function gatePw(name, isNew, msg, needCode) {
    card(`<p><b>${esc(name)}</b>님 ${isNew ? '처음 오셨네요. 사용할 비밀번호를 정하세요 (6자 이상)' : '비밀번호를 입력하세요'}</p>
      ${field('gPw', '비밀번호', 'password')}${isNew ? field('gPw2', '비밀번호 확인 (한 번 더)', 'password') : ''}
      ${needCode ? `<p style="font-size:14px;margin:8px 0 0">🔑 <b>가입 코드</b> — 관리자(양태욱)에게 카톡으로 전송되었습니다. 관리자에게 6자리 코드를 받아 입력하세요.</p>
        ${field('gCode', '가입 코드 6자리')}<button id="gAgain" style="width:100%;margin:2px 0 6px">코드 다시 요청</button>` : ''}
      <label style="display:block;margin:4px 0;font-size:14px"><input type="checkbox" id="gShow"> 비밀번호 보이기</label>
      <p class="muted" id="gCount"></p><div id="gMsg">${msgHtml(msg)}</div>
      <button class="primary" id="gGo" style="width:100%;margin-top:6px">${isNew ? '비밀번호 설정하고 시작' : '로그인'}</button>
      <button id="gBack" style="width:100%;margin-top:6px">← 이름 다시 입력</button>
      ${isNew ? '' : '<p class="muted">비밀번호를 잊었으면 관리자에게 초기화를 요청하세요.</p>'}`);
    const pw = document.getElementById('gPw'), pw2 = document.getElementById('gPw2');
    const goBtn = document.getElementById('gGo');
    const say = m => { document.getElementById('gMsg').innerHTML = msgHtml(m); };   // 오류는 입력값을 지우지 않고 표시
    const count = () => { document.getElementById('gCount').textContent = `입력한 글자: ${pw.value.length}자${pw2 ? ` / 확인 ${pw2.value.length}자` : ''}`; };
    [pw, pw2].filter(Boolean).forEach(i => i.addEventListener('input', count));
    count();
    document.getElementById('gShow').onchange = e => [pw, pw2].filter(Boolean).forEach(i => { i.type = e.target.checked ? 'text' : 'password'; });
    // Enter(휴대폰 「이동」): 첫 칸에서는 확인 칸으로 이동, 마지막 칸에서 제출
    pw.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (pw2) pw2.focus(); else go(); } });
    const codeIn = document.getElementById('gCode');
    if (codeIn) { codeIn.inputMode = 'numeric'; codeIn.maxLength = 6; codeIn.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); go(); } }); }
    if (pw2) pw2.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (codeIn) codeIn.focus(); else go(); } });
    const again = document.getElementById('gAgain');
    if (again) again.onclick = async () => {
      again.disabled = true;
      const st = await requestCode(name, true);
      again.disabled = false;
      say(st === 'sent' ? '새 코드를 관리자에게 보냈습니다. 이전 코드는 더 이상 쓸 수 없습니다'
        : st === 'wait' ? '방금 요청했습니다. 1분 뒤에 다시 시도하세요' : '코드 요청에 실패했습니다. 잠시 후 다시 시도하세요');
    };
    document.getElementById('gBack').onclick = () => gateName();
    goBtn.onclick = go;
    setTimeout(() => pw.focus(), 50);
    async function go() {
      const p = pw.value;
      if (p.length < 6) return say(`비밀번호는 6자 이상이어야 합니다 (지금 ${p.length}자)`);
      if (pw2 && !pw2.value) { pw2.focus(); return say('아래 「비밀번호 확인」 칸에 같은 비밀번호를 한 번 더 입력하세요'); }
      if (pw2 && p !== pw2.value) return say('두 칸의 비밀번호가 다릅니다. 「비밀번호 보이기」로 확인해 보세요');
      const code = codeIn ? codeIn.value.replace(/\D/g, '') : '';
      if (codeIn && code.length !== 6) { codeIn.focus(); return say('관리자에게 받은 가입 코드 6자리를 입력하세요'); }
      goBtn.disabled = true; say('');
      const res = isNew ? await sb.auth.signUp({ email: emailOf(name), password: p, options: code ? { data: { code } } : undefined })
        : await sb.auth.signInWithPassword({ email: emailOf(name), password: p });
      goBtn.disabled = false;
      if (res.error) {
        return say(/가입 코드/.test(res.error.message) ? '가입 코드가 틀렸거나 만료되었습니다. 관리자에게 받은 코드를 확인하세요'
          : /invalid login/i.test(res.error.message) ? '비밀번호가 틀렸습니다'
          : /database error|등록되지|이미 비밀번호/i.test(res.error.message) ? '등록되지 않았거나 이미 비밀번호가 설정된 이름입니다'
          : /password/i.test(res.error.message) ? '서버가 이 비밀번호를 거부했습니다: ' + res.error.message : res.error.message);
      }
      if (!res.data.session) return say('서버 설정 오류: Supabase에서 「Confirm email」을 꺼야 합니다');
      try { await afterLogin(); } catch (e) { gateName('로그인 후 정보를 불러오지 못했습니다: ' + e.message); }
    }
  }

  // ---------- 세션·데이터 ----------
  async function afterLogin() {
    const { data: { user } } = await sb.auth.getUser();
    const { data: m, error } = await sb.from('members').select('name,role').eq('user_id', user.id).maybeSingle();
    if (error) throw error;
    if (!m) { await logout('회원 등록이 해제되었습니다. 관리자에게 문의하세요'); return; }
    me = m; writeJson(ME_KEY, me);
    await loadCourses();
    gate.style.display = 'none';
    toast(`${me.name}님 환영합니다 · 골프장 ${PAR_DB.length}곳`, 2500);
  }
  async function loadCourses() {
    const list = [];
    for (let from = 0; ; from += 1000) {
      const { data, error } = await sb.from('courses').select('data').order('name').range(from, from + 999);
      if (error) throw error;
      list.push(...data.map(r => r.data));
      if (data.length < 1000) break;
    }
    setParDb(list);
    writeJson(DB_CACHE, { at: Date.now(), list });
  }
  async function logout(msg) {
    if (sb) await sb.auth.signOut().catch(() => {});
    writeJson(DB_CACHE, null);
    setParDb([]);
    if (me) me = { name: me.name }; writeJson(ME_KEY, me);
    closeSheet();
    gateName(msg);
  }
  async function refresh() {   // 온라인이면 회원 상태·DB 최신화 (실패해도 캐시로 계속 사용)
    if (!sb || !navigator.onLine) return;
    const { data, error } = await sb.auth.getUser();
    if (error && error.status && error.status >= 400 && error.status < 500) return logout('로그인이 만료되었습니다. 다시 로그인하세요');
    if (!data || !data.user) return;
    try { await afterLogin(); } catch (e) { /* 네트워크 문제: 캐시 유지 */ }
  }
  async function boot() {
    const cache = readJson(DB_CACHE);
    const session = sb ? (await sb.auth.getSession()).data.session : null;
    if (cache && me && me.role && (session || !sb)) { setParDb(cache.list); gate.style.display = 'none'; refresh(); return; }
    if (session) { try { await afterLogin(); return; } catch (e) { /* 아래 로그인 화면 */ } }
    gateName(sb ? '' : '첫 로그인은 인터넷 연결이 필요합니다');
  }

  // ---------- 관리자 ----------
  const isAdmin = () => !!(me && me.role === 'admin');
  async function adminSheet() {
    openSheet('<h3>👑 관리자</h3><p>불러오는 중…</p>');
    const { data, error } = await sb.from('members').select('name,role,user_id').order('name');
    if (error) return openSheet(`<h3>👑 관리자</h3><p>${esc(error.message)}</p><div class="list"><button data-act="close">닫기</button></div>`);
    // 가입 대기 코드(카톡이 안 왔을 때 여기서 확인) — 서버에 기능이 없으면 조용히 생략
    const codes = {};
    const cr = await sb.from('signup_codes').select('name,code,expires_at,notified_at');
    if (!cr.error) cr.data.forEach(c => { if (Date.parse(c.expires_at) > Date.now()) codes[c.name] = c; });
    const codeTxt = c => c ? ` · 🔑 가입 코드 <b>${esc(c.code)}</b>${c.notified_at ? ' (카톡 발송됨)' : ' (카톡 미발송)'}` : '';
    openSheet(`<h3>👑 관리자 — 회원 ${data.length}명</h3>
      <div class="row"><input type="text" id="auNew" placeholder="등록할 이름"><button data-act="au-add" class="primary" style="flex:0 0 auto">등록</button></div>
      ${data.map(m => `<div class="row"><span>${esc(m.name)} ${m.role === 'admin' ? '👑' : ''}<br><span class="muted">${m.user_id ? '사용 중' : '비밀번호 설정 대기' + codeTxt(codes[m.name])}</span></span>
        ${m.user_id ? `<button data-act="au-reset" data-name="${esc(m.name)}" style="flex:0 0 auto">비번 초기화</button>` : ''}
        ${m.role === 'admin' ? '' : `<button data-act="au-del" data-name="${esc(m.name)}" style="flex:0 0 auto">삭제</button>`}</div>`).join('')}
      <h3>골프장 파 DB — ${PAR_DB.length}곳</h3>
      <div class="list"><button data-act="au-edit" data-name="">＋ 새 골프장 추가</button>
        <button data-act="au-upload">📤 courses-kr.js 파일로 일괄 업로드</button>
        <input type="file" id="auFile" accept=".js,.json" style="display:none">
        <button data-act="close">닫기</button></div>
      <p class="muted">기존 골프장 파 수정: 골프장 검색 → 골프장 선택 → 「👑 서버 파 정보 수정」</p>`);
  }
  async function rpcOrToast(fn, args, ok) {
    const { error } = await sb.rpc(fn, args);
    toast(error ? '실패: ' + error.message : ok, 2500);
    adminSheet();
  }
  function editSheet(name) {
    const c = PAR_DB.find(x => x.name === name) || { name: '', aliases: [], region: '', nines: [], verified: false, notes: '', source: '' };
    const inp = (id, v, ph) => `<input type="text" id="${id}" value="${esc(v || '')}" placeholder="${ph}" style="width:100%;margin:4px 0">`;
    openSheet(`<h3>${name ? '✏️ ' + esc(name) : '＋ 새 골프장'}</h3>
      ${inp('aeName', c.name, '골프장 이름 (예: ○○CC)')}${inp('aeAlias', (c.aliases || []).join(', '), '별칭 — 쉼표로 구분 (검색용)')}
      ${inp('aeRegion', c.region, '지역 (예: 경기 용인)')}
      <p class="muted">코스: 한 줄에 「코스명: 파 9개」 (예: 레이크: 4 4 3 5 4 4 3 5 4)</p>
      <textarea id="aeNines" rows="${Math.max(3, c.nines.length + 1)}" style="width:100%;font:inherit;background:var(--btn);color:var(--text);border:1px solid var(--line);border-radius:8px;padding:8px">${esc(c.nines.map(n => `${n.label}: ${n.pars.join(' ')}${n.short ? ' (숏)' : ''}`).join('\n'))}</textarea>
      <label style="display:block;margin:8px 0"><input type="checkbox" id="aeVer" ${c.verified ? 'checked' : ''}> 확인 완료 (끄면 앱에 「확인 필요」 표시)</label>
      ${inp('aeNotes', c.notes, '메모 (확인 필요 사유 등)')}${inp('aeSrc', c.source, '출처 URL')}
      <div class="list"><button data-act="au-save" data-name="${esc(name)}" class="primary">서버에 저장 (모든 회원에게 반영)</button>
        ${name ? `<button data-act="au-remove" data-name="${esc(name)}">🗑 이 골프장 삭제</button>` : ''}
        <button data-act="au-admin">← 관리자</button></div>`);
  }
  async function saveCourse(oldName) {
    const v = id => document.getElementById(id).value.trim();
    const name = v('aeName');
    if (!name) return toast('이름을 입력하세요');
    const nines = [];
    for (const line of v('aeNines').split('\n').map(s => s.trim()).filter(Boolean)) {
      const m = line.match(/^(.+?)\s*[:：]\s*([\d\s,]+?)\s*(\(숏\))?$/);
      const pars = m ? m[2].match(/\d/g).map(Number) : [];
      if (!m || pars.length !== 9 || pars.some(p => p < 3 || p > 7)) return toast(`형식 오류: 「${line}」 — 파 9개(3~7)`, 3000);
      nines.push(m[3] ? { label: m[1].trim(), pars, short: true } : { label: m[1].trim(), pars });
    }
    if (!nines.length) return toast('코스를 한 줄 이상 입력하세요');
    const old = PAR_DB.find(x => x.name === oldName) || {};
    const data = { ...old, name, aliases: v('aeAlias').split(',').map(s => s.trim()).filter(Boolean), region: v('aeRegion'),
      nines, verified: document.getElementById('aeVer').checked, notes: v('aeNotes'), source: v('aeSrc'),
      checked: new Date().toISOString().slice(0, 10) };
    const { error } = await sb.from('courses').upsert({ name, data, updated_at: new Date().toISOString(), updated_by: me.name });
    if (error) return toast('저장 실패: ' + error.message, 3000);
    if (oldName && oldName !== name) await sb.from('courses').delete().eq('name', oldName);
    await loadCourses().catch(() => {});
    toast(`「${name}」 저장 — 모든 회원에게 반영됩니다`, 2500);
    editSheet(name);
  }
  async function uploadFile(file) {
    const text = await file.text();
    let list;
    try { const m = text.match(/GOLF_PAR_DB\s*=\s*(\[[\s\S]*\]);/); list = JSON.parse(m ? m[1] : text); } catch (e) { return toast('파일 형식을 읽지 못했습니다', 3000); }
    if (!Array.isArray(list) || !confirm(`골프장 ${list.length}곳을 서버에 올릴까요? (같은 이름은 덮어씀)`)) return;
    const now = new Date().toISOString();
    for (let i = 0; i < list.length; i += 100) {
      const rows = list.slice(i, i + 100).map(c => ({ name: c.name, data: c, updated_at: now, updated_by: me.name }));
      const { error } = await sb.from('courses').upsert(rows);
      if (error) return toast(`업로드 실패(${i}번째부터): ${error.message}`, 4000);
      toast(`업로드 중… ${Math.min(i + 100, list.length)}/${list.length}`);
    }
    await loadCourses();
    toast(`업로드 완료 — 서버 DB ${PAR_DB.length}곳`, 3000);
    adminSheet();
  }
  box.addEventListener('click', e => {
    const t = e.target.closest('[data-act^="au-"]'); if (!t || !sb) return;
    const a = t.dataset.act, n = t.dataset.name;
    if (a === 'au-logout') { if (confirm('로그아웃할까요?')) logout(); return; }
    if (!isAdmin()) return toast('관리자만 할 수 있습니다');
    if (a === 'au-admin') adminSheet();
    else if (a === 'au-add') {
      const name = document.getElementById('auNew').value.trim(); if (!name) return;
      sb.from('members').insert({ name }).then(({ error }) => { toast(error ? '등록 실패: ' + error.message : `「${name}」 등록 — 이 이름으로 접속해 비밀번호를 정하면 됩니다`, 3000); adminSheet(); });
    }
    else if (a === 'au-reset') { if (confirm(`「${n}」의 비밀번호를 초기화할까요? 다음 접속 때 새 비밀번호를 정합니다.`)) rpcOrToast('admin_reset', { n }, '초기화했습니다'); }
    else if (a === 'au-del') { if (confirm(`「${n}」 회원을 삭제할까요?`)) rpcOrToast('admin_remove', { n }, '삭제했습니다'); }
    else if (a === 'au-edit') editSheet(n);
    else if (a === 'au-save') saveCourse(n);
    else if (a === 'au-remove') {
      if (confirm(`「${n}」 골프장을 서버에서 삭제할까요?`)) sb.from('courses').delete().eq('name', n).then(async ({ error }) => {
        toast(error ? '삭제 실패: ' + error.message : '삭제했습니다'); await loadCourses().catch(() => {}); adminSheet(); });
    }
    else if (a === 'au-upload') document.getElementById('auFile').click();
  });
  box.addEventListener('change', e => { if (e.target.id === 'auFile' && e.target.files[0] && isAdmin()) uploadFile(e.target.files[0]); });

  window.GolfAuth = {
    isAdmin,
    menuHtml: () => (isAdmin() ? '<button data-act="au-admin">👑 관리자 (회원·파 DB)</button>' : '')
      + `<button data-act="au-logout">🔓 로그아웃${me && me.name ? ' (' + esc(me.name) + ')' : ''}</button>`,
    editButton: name => isAdmin() ? `<button data-act="au-edit" data-name="${esc(name)}">👑 서버 파 정보 수정</button>` : ''
  };
  boot();
})();
