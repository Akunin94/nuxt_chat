importScripts('/nuxt_chat/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt_chat/_nuxt/0703e90.js",
    "revision": "e24ebff282ae5c7b4990383cbeae14c0"
  },
  {
    "url": "/nuxt_chat/_nuxt/22e044b.js",
    "revision": "0a0e29bceece19750bca8716983e06c3"
  },
  {
    "url": "/nuxt_chat/_nuxt/2f5059a.js",
    "revision": "f6283d93609915102d3467736d0bc73a"
  },
  {
    "url": "/nuxt_chat/_nuxt/37acedd.js",
    "revision": "1d477b895232ac01b58b347198b35c78"
  },
  {
    "url": "/nuxt_chat/_nuxt/42585b2.js",
    "revision": "984481d96ea8dccdbe29224f1ee300f0"
  },
  {
    "url": "/nuxt_chat/_nuxt/61051f8.js",
    "revision": "3502ca31396d4191bb4f0f2dc2d7967d"
  },
  {
    "url": "/nuxt_chat/_nuxt/f0cf3fa.js",
    "revision": "7b2ace3e20ab67871ac91ba1ee58eb10"
  }
], {
  "cacheId": "nuxt-chat",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/nuxt_chat/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/nuxt_chat/.*'), workbox.strategies.networkFirst({}), 'GET')
