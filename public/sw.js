if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, t) => {
    const i = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[i]) return;
    let c = {};
    const r = (e) => a(e, i),
      o = { module: { uri: i }, exports: c, require: r };
    s[i] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (t(...e), c));
  };
}
define(['./workbox-50de5c5d'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/server/middleware-build-manifest.js', revision: 'RmEtxpakSmhaceW5JirUh' },
        {
          url: '/_next/server/middleware-react-loadable-manifest.js',
          revision: 'RmEtxpakSmhaceW5JirUh',
        },
        { url: '/_next/server/next-font-manifest.js', revision: 'RmEtxpakSmhaceW5JirUh' },
        { url: '/_next/server/next-font-manifest.json', revision: 'RmEtxpakSmhaceW5JirUh' },
        {
          url: '/_next/static/RmEtxpakSmhaceW5JirUh/_buildManifest.js',
          revision: 'RmEtxpakSmhaceW5JirUh',
        },
        {
          url: '/_next/static/RmEtxpakSmhaceW5JirUh/_ssgManifest.js',
          revision: 'RmEtxpakSmhaceW5JirUh',
        },
        { url: '/_next/static/chunks/260-34e9af46e702c91a.js', revision: 'RmEtxpakSmhaceW5JirUh' },
        {
          url: '/_next/static/chunks/framework-63157d71ad419e09.js',
          revision: 'RmEtxpakSmhaceW5JirUh',
        },
        { url: '/_next/static/chunks/main-b3a87bfb42ae09b9.js', revision: 'RmEtxpakSmhaceW5JirUh' },
        {
          url: '/_next/static/chunks/pages/%5Bslug%5D-48fe7d10bf4b1ee8.js',
          revision: 'RmEtxpakSmhaceW5JirUh',
        },
        {
          url: '/_next/static/chunks/pages/_app-683573d1cb81290f.js',
          revision: 'RmEtxpakSmhaceW5JirUh',
        },
        {
          url: '/_next/static/chunks/pages/_error-54de1933a164a1ff.js',
          revision: 'RmEtxpakSmhaceW5JirUh',
        },
        {
          url: '/_next/static/chunks/pages/index-974c7d6cfaa34f58.js',
          revision: 'RmEtxpakSmhaceW5JirUh',
        },
        {
          url: '/_next/static/chunks/pages/posts/%5Bslug%5D-1002e780836fd8e3.js',
          revision: 'RmEtxpakSmhaceW5JirUh',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: 'RmEtxpakSmhaceW5JirUh',
        },
        {
          url: '/_next/static/chunks/webpack-b8f8d6679aaa5f42.js',
          revision: 'RmEtxpakSmhaceW5JirUh',
        },
        { url: '/_next/static/css/87568aa37510f789.css', revision: 'RmEtxpakSmhaceW5JirUh' },
        { url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
        { url: '/img/cover.PNG', revision: '243e2d3d65af3f0e29aa5643f50a0fd8' },
        { url: '/img/icon-192.png', revision: 'd27169d080684ebb57b8387d05c4b444' },
        { url: '/img/icon-512.png', revision: 'f1d74b43a3832183202483a40d9e9d84' },
        { url: '/manifest.json', revision: '7f497568e8a340b9ac146c654dd86ae4' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: n }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET'
    );
});