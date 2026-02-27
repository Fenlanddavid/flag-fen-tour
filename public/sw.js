const CACHE = "fen-tour-v1";
const FILES = [
  "./",
  "./map.html",
  "./stop.html",
  "./styles.css",
  "./app.js",
  "./data.js",
  "./FF map no key or symbols high res with new roundhouse.jpg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(FILES))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});
