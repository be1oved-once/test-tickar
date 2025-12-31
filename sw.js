

const CACHE_NAME = "tic-kar-v1";

/* =========================
   PRECACHE (SAFE)
========================= */
const PRECACHE = [
  "/",
  "/index.html",
  "/offline.html",

  // main pages
  "/About-us.html",
  "/contact.html",
  "/bookmarks.html",
  "/performance.html",
  "/mtp-rtp.html",
  "/business-laws.html",
  "/sponsor-us.html",
  "/profile.html",
  "/correction-test.html",
  "/Legal/disclaimer.html",
  "/Legal/privacy-policy.html",
  "/Legal/terms.html",

  // css
    "/style.css",
  "/style-rtp.css",
  "/assets/css/common.css",
  "/assets/css/landing.css",
  "/assets/css/profile.css",
  "/assets/css/style-law.css",
  "/assets/css/perform.css",
  "/assets/css/contact.css",
  "/assets/css/sponsor.css",
  "/assets/css/chatroom.css",
  "/assets/css/article.css",
  "/assets/css/about.css",
  "/assets/css/common-review.css",
  "/Legal/legal.css",

  /* JS */
  "/assets/js/common.js",
  "/assets/js/common-layout.js",
  "/assets/js/common-logic.js",
  "/assets/js/rtp-mtp.js",
  "/assets/js/questions-logic.js",
  "/assets/js/questions-logic-rtp.js",
  "/assets/js/law-pdf-logic.js",
  "/assets/js/questions-law.js",
  "/assets/js/questions.js",
  "/assets/js/rtp-mtp.js",
  "/assets/js/insight-engine.js",
  "/assets/js/performance-logic.js",

  // icons
  "/assets/favicon/favicon.ico",
  "/assets/QR/qr.png",
  "/assets/favicon/apple-touch-icon.png",
  "/assets/favicon/android-chrome-192x192.png",
  "/assets/favicon/android-chrome-512x512.png"
];

/* =========================
   INSTALL
========================= */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      for (const url of PRECACHE) {
        try {
          await cache.add(url);
        } catch (err) {
          console.warn("❌ Failed to cache:", url);
        }
      }
    })
  );
  self.skipWaiting();
});

/* =========================
   ACTIVATE
========================= */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* =========================
   FETCH
========================= */
self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);

  // ❌ never cache firebase / api
  if (
    url.hostname.includes("googleapis") ||
    url.hostname.includes("firebase") ||
    url.pathname.startsWith("/api/")
  ) {
    return;
  }

  // HTML → network first
  if (req.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match("/offline.html")))
    );
    return;
  }

  // assets → cache first
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req))
  );
});