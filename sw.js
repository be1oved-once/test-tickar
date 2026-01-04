

const CACHE_NAME = "tickar-static-v1";

const PRECACHE = [
  "/",
  "/index.html",
  "/offline.html",
  "/performance.html",
  "/mtp-rtp.html",

  // static pages
  "/about-us.html",
  "/blogs.html",
  "/bookmarks.html",
  "/business-laws.html",
  "/chapters.html",
  "/chatrooms.html",
  "/confirmation.html",
  "/contact.html",
  "/correction-test.html",
  "/profile.html",
  "/sponsor-us.html",
  "/temp-test.html",
  "/thoughts.html",

  // CSS
  "/style.css",
  "/style-rtp.css",
  "/assets/css/common.css",
  "/assets/css/landing.css",
  "/assets/css/about.css",
  "/assets/css/chatroom.css",
  "/assets/css/contact.css",
  "/assets/css/perform.css",
  "/assets/css/profile.css",
  "/assets/css/sponsor.css",
  "/assets/css/penalty.css",
  "/assets/css/style-law.css",

  // JS (core only)
  "/assets/js/common.js",
  "/assets/js/common-layout.js",
  "/assets/js/common-logic.js",
  "/assets/js/firebase.js",
  "/assets/js/profile.js",
  "/assets/js/settings.js",
  "/assets/js/student-test.js",
  "/assets/js/user-metrics-init.js",
  "/assets/js/user-metrics-update.js",
  "/assets/js/questions.js",
  "/assets/js/questions-law.js",
  "/assets/js/questions-logic.js",
  "/assets/js/questions-logic-rtp.js",
  "/assets/js/rtp-mtp.js",
  "/assets/js/performance-logic.js",
  "/assets/js/law-logic.js",
  "/assets/js/law-pdf-logic.js",
  "/assets/js/insight-engine.js",
  "/assets/js/chatroom.js",
  "/assets/js/bookmark-logic.js",
  "/assets/js/contact.js",

  // icons / images
  "/assets/favicon/favicon.ico",
  "/assets/favicon/apple-touch-icon.png",
  "/assets/favicon/android-chrome-192x192.png",
  "/assets/favicon/android-chrome-512x512.png",
  "/assets/QR/qr.png"
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
  caches.match(req).then(cached => {
    const fetchPromise = fetch(req).then(res => {
      caches.open(CACHE_NAME).then(c => c.put(req, res.clone()));
      return res;
    });
    return cached || fetchPromise;
  })
);
});