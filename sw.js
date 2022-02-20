importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/354086d.js",
    "revision": "737d81b8b5d02bd890d27863933d3149"
  },
  {
    "url": "/_nuxt/6930957.js",
    "revision": "acca19860a9f41c0fefdef781bddc1c4"
  },
  {
    "url": "/_nuxt/85e19f3.js",
    "revision": "04697c7acd8b5f25f286eba83ff0061b"
  },
  {
    "url": "/_nuxt/8cab392.js",
    "revision": "75fe244f0ca81ab0f0bc4fae47b97ec8"
  },
  {
    "url": "/_nuxt/a0e963d.js",
    "revision": "12454df88032fd808d47485437dd3dd9"
  },
  {
    "url": "/_nuxt/b4df13c.js",
    "revision": "de47721f5d65495a4827a2678fae3a44"
  },
  {
    "url": "/_nuxt/b697cc5.js",
    "revision": "19193ab27daaabc800ce4a4455913e5b"
  }
], {
  "cacheId": "nuxt-chat",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
