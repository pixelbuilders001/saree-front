const CACHE_NAME = 'shree-banarasi-cache-v1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/logo.png',
    '/manifest.json',
    '/pwa-192.png',
    '/pwa-512.png',
    '/favicon.ico'
];

// Install Event - Pre-cache shell assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
    self.skipWaiting();
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch Event - Cache first with network fallback for images and assets
self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    // Serve static assets out of cache if match found
    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            // Fetch from network and cache images dynamically
            return fetch(request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 250 && networkResponse.status !== 200) {
                    return networkResponse;
                }

                // Cache new static images on the fly
                if (request.destination === 'image' || url.pathname.endsWith('.png') || url.pathname.endsWith('.jpg') || url.pathname.endsWith('.svg') || url.pathname.endsWith('.webp')) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, responseToCache);
                    });
                }

                return networkResponse;
            }).catch(() => {
                return caches.match('/index.html');
            });
        })
    );
});
