self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('mhct-v1').then(cache => cache.addAll([
    './',
    './manifest.webmanifest',
    './service-worker.js'
  ])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});