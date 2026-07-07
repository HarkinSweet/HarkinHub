const CACHE_NAME = "harkinhub-v1";

const urlsToCache = [
  "dashboard.html",
  "css/dashboard.css",
  "js/dashboard.js",
  "js/main.js",
  "js/data.js",
  "manifest.json",
  "images/favicon.png"
];

self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );

});

self.addEventListener("fetch", event => {

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );

});