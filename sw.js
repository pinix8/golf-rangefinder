'use strict';

// 앱 화면은 네트워크 우선(업데이트 반영), 끊기면 캐시로 동작. 위성지도 타일은 본 것만 캐시.
const CACHE = 'golf-rf-v37';
const SHELL = [
  './', './index.html', './osm.js?v=21', './auth.js?v=21', './ojang.js?v=34', './updown.js?v=30', './manifest.json', './icon.svg',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.url.includes('.supabase.co')) return;   // 로그인·골프장 데이터 API는 캐시하지 않음(앱이 직접 휴대폰에 캐시)
  const isTile = req.url.includes('arcgisonline.com');
  if (isTile) {
    e.respondWith(caches.match(req).then(hit => (hit && !(hit.type === 'opaque' && req.mode === 'cors')) ? hit : fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  // no-cache: GitHub Pages의 10분 HTTP 캐시를 거치지 않고 서버에 새 버전 확인(변경 없으면 304로 가볍게)
  e.respondWith(fetch(req, { cache: 'no-cache' }).then(res => {
    const copy = res.clone();
    caches.open(CACHE).then(c => c.put(req, copy));
    return res;
  }).catch(() => caches.match(req)));
});
