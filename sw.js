const CACHE_NAME = 'takken-master-v4-fix';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/questions.js',
    '/manifest.json'
];

// Service Workerのインストール
self.addEventListener('install', (event) => {
    // 新しいService Workerを即座に有効化
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('キャッシュを開きました');
                return cache.addAll(urlsToCache);
            })
    );
});

// リクエストの処理
self.addEventListener('fetch', (event) => {
    // chrome-extension:// スキームのリクエストは無視
    if (event.request.url.startsWith('chrome-extension://')) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // キャッシュから返す
                if (response) {
                    return response;
                }
                
                // ネットワークから取得
                return fetch(event.request)
                    .then((response) => {
                        // レスポンスが有効でない場合
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // HTTPスキームのみキャッシュ
                        if (event.request.url.startsWith('http')) {
                            // レスポンスのクローンを作成してキャッシュに保存
                            const responseToCache = response.clone();
                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(event.request, responseToCache);
                                });
                        }
                        
                        return response;
                    })
                    .catch(() => {
                        // オフライン時のフォールバック
                        if (event.request.destination === 'document') {
                            return caches.match('/index.html');
                        }
                    });
            })
    );
});

// キャッシュの更新
self.addEventListener('activate', (event) => {
    // 即座にコントロールを取得
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('古いキャッシュを削除:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // すべてのクライアントを即座に制御
            return self.clients.claim();
        })
    );
});