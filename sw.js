
        const CACHE_NAME = 'comanda-print-cache-v1';
        const ASSETS = [
          './',
          './index.html'
        ];

        self.addEventListener('install', (e) => {
          e.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
              return cache.addAll(ASSETS);
            }).catch(err => console.log("Erro caching", err))
          );
        });

        self.addEventListener('fetch', (e) => {
          e.respondWith(
            caches.match(e.request).then((response) => {
              return response || fetch(e.request);
            })
          );
        });
        