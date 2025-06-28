const CACHE_NAME = 'resume-builder-v1';
const urlsToCache = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/user-photo.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(() => {
        // Return offline page if both cache and network fail
        if (event.request.destination === 'document') {
          return caches.match('/offline.html');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Get stored form data
    const formData = await getStoredFormData();
    if (formData) {
      // Process stored form data when back online
      console.log('Processing stored form data:', formData);
      // Add your form submission logic here
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

async function getStoredFormData() {
  // Implementation for retrieving stored form data
  // This would typically use IndexedDB or localStorage
  return null;
}

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New resume builder update!',
    icon: '/user-photo.png',
    badge: '/user-photo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Open App',
        icon: '/user-photo.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/user-photo.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Resume Builder', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
