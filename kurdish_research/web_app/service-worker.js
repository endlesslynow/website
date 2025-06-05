const CACHE_NAME = 'audio-app-v1';
const APP_SHELL = [
    './',
    './index.html',
    './manifest.json'
];

// Install - cache app shell only
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

// Activate - clean up old caches
self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch - serve cached app shell, let everything else go to network
self.addEventListener('fetch', event => {
    // Only handle app shell requests
    if (APP_SHELL.includes(new URL(event.request.url).pathname)) {
        event.respondWith(
            caches.match(event.request)
                .then(response => response || fetch(event.request))
        );
    }
    // For everything else (MP3s, HTML pages), just use network
    // The main app handles audio caching via IndexedDB
});