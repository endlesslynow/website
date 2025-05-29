const CACHE_NAME = 'audio-cache-v1';

// Install event
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Cache opened');
            // Pre-cache the main app files
            return cache.addAll([
                './',
                './index.html',
                './manifest.json'
            ]);
        })
    );
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

// Fetch event - intercept MP3 requests
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // Only handle MP3 files
    if (url.pathname.endsWith('.mp3')) {
        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return cache.match(event.request).then(cachedResponse => {
                    if (cachedResponse) {
                        console.log('Serving cached MP3:', url.pathname);
                        return cachedResponse;
                    }
                    
                    // Fetch and cache the MP3
                    console.log('Fetching and caching MP3:', url.pathname);
                    return fetch(event.request).then(response => {
                        // Only cache successful responses
                        if (response.status === 200) {
                            const responseClone = response.clone();
                            cache.put(event.request, responseClone);
                        }
                        return response;
                    }).catch(error => {
                        console.error('Failed to fetch MP3:', error);
                        // Return a fallback or rethrow
                        throw error;
                    });
                });
            })
        );
    }
    // For non-MP3 requests, just fetch normally
    else {
        event.respondWith(fetch(event.request));
    }
});

// Handle messages from the main thread
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});