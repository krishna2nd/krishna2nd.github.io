importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js'
);

/* global importScripts, workbox */

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js'
);

var VERSION = '0.0.1';
var SPA_NAV_PATTERN = '/';
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
}

function registerRoutes() {
  workbox.routing.registerNavigationRoute(SPA_NAV_PATTERN, SPA_NAV_OPTIONS);
  workbox.routing.registerRoute(
    /\.(?:js|css|json|html)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-cache',
      plugins: PLUGINS
    })
  );

  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'image-cache',
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
