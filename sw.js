/* global importScripts, workbox */

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js'
);

var VERSION = '0.0.3';
var SPA_NAV_PATTERN = '/index.html';
var SPA_NAV_OPTIONS = {
  blacklist: [
    new RegExp(
      '/*.*[.](xml|json|txt|js|ttf|eot|svg|woff|gif|ico|jpeg|jpg|png|webp)$',
      'i'
    )
  ]
};

var ONE_YEAR_EXP = new workbox.expiration.Plugin({
  maxEntries: 200,
  maxAgeSeconds: 365 * 24 * 60 * 60
});

var CACHEABLE = new workbox.cacheableResponse.Plugin({
  statuses: [0, 200]
});

var PLUGINS = [ONE_YEAR_EXP, CACHEABLE];

function initialize() {
  workbox.core.setCacheNameDetails({
    prefix: 'kk-web-app',
    suffix: VERSION,
    precache: 'kk'
  });
  workbox.googleAnalytics.initialize();
  workbox.core.skipWaiting();
  workbox.core.clientsClaim();
  workbox.precaching.precacheAndRoute(
    [
      '/style.dae90.css',
      '/bundle.d4156.js',
      '/route-experience.chunk.10347.js',
      '/route-home.chunk.88b4e.js',
      { url: '/index.html', revision: VERSION },
      { url: '/', revision: VERSION }
    ],
    {
      directoryIndex: null,
      cleanUrls: true
    }
  );
}

function registerRoutes() {
  workbox.routing.registerNavigationRoute(
    workbox.precaching.getCacheKeyForURL(SPA_NAV_PATTERN),
    SPA_NAV_OPTIONS
  );
  workbox.routing.registerRoute(
    /^\/$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-cache',
      plugins: PLUGINS
    })
  );
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg|ico)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'images-cache',
      plugins: PLUGINS
    })
  );
  workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'code-cache',
      plugins: PLUGINS
    })
  );
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'google-fonts'
    })
  );
  workbox.routing.registerRoute(
    /^https:\/\/use\.fontawesome\.com/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'fab-fonts'
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: PLUGINS
    })
  );
}

if (workbox) {
  initialize();
  registerRoutes();
}
