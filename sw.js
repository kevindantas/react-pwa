self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('cache-v1')
            .then((cache) => {
                cache.addAll([
                    'index.html'
                ]);
            })
    );
});


// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request)
//             .then((cache) => {
//                 if (cache) return cache;

//                 return fetch(event.request);
//             })
//     );
// });


self.addEventListener('fetch', function(event) {
    const { url } = event.request;
    if (url.endsWith('.svg')) {
        event.respondWith(
            fetch('http://i.imgur.com/mxs6D.gif')
        )
    }
});

// self.addEventListener()