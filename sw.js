/* Service worker for Sổ Ngày Cần Nhớ — enables PWA installability.
   Network passthrough only: the app keeps working exactly as before,
   data stays on the device (localStorage in index.html). */
self.addEventListener("install", function () {
  self.skipWaiting();
});
self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", function (event) {
  /* Passthrough — let the browser handle every request normally, but do
     respond so Chrome counts a real fetch handler for this worker. */
  event.respondWith(fetch(event.request));
});
