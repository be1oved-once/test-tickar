const CACHE_VERSION = "8"; // change ONLY when structure changes
const CACHE_NAME = `beforexam-cache-${CACHE_VERSION}`;
const OFFLINE_URL = "/offline.html";

/* =========================
   INSTALL (NO HARD BLOCK)
========================= */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "/",
        "/offline.html",
        "/assets/css/common.css",
        "/assets/js/common.js",
        "/assets/js/common-layout.js"
      ]);
    })
  );
  // ❌ DO NOT skipWaiting
});

/* =========================
   ACTIVATE (NO FORCE RELOAD)
========================= */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(k => {
          if (k !== CACHE_NAME) return caches.delete(k);
        })
      )
    ).then(() => self.clients.claim())
  );
});

/* =========================
   FETCH
========================= */
self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);
  
  // ❌ Never cache Firebase / APIs
  if (
    url.hostname.includes("googleapis") ||
    url.hostname.includes("firebase") ||
    url.hostname.includes("gstatic") ||
    url.pathname.startsWith("/api/")
  ) {
    return;
  }
  
  /* =========================
     HTML → STALE WHILE REVALIDATE
  ========================= */
  if (req.mode === "navigate") {
    event.respondWith(
      caches.match(req).then(cached => {
        const networkFetch = fetch(req)
          .then(res => {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(req, res.clone());
            });
            return res;
          })
          .catch(() => cached || caches.match(OFFLINE_URL));
        
        // ✅ return cached immediately, update in background
        return cached || networkFetch;
      })
    );
    return;
  }
  
  /* =========================
     ASSETS → CACHE FIRST
  ========================= */
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      
      return fetch(req)
        .then(res => {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(req, res.clone());
          });
          return res;
        })
        .catch(() => cached);
    })
  );
});