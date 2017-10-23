importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/app.css",
    "revision": "b9cb5c393f3dcc0fb4571482dae9cd71"
  },
  {
    "url": "favicon.ico",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.eot",
    "revision": "f4769f9bdb7466be65088239c12046d1"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.ttf",
    "revision": "e18bbf611f2a2e43afc071aa2f4e1512"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
  },
  {
    "url": "fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "images/airplane-logo.png",
    "revision": "43080de725c149f58ec4d69a054071cd"
  },
  {
    "url": "index.php",
    "revision": "b9901d13f00ef92e0793e2d9fcd57431"
  },
  {
    "url": "js/app.js",
    "revision": "47a990d6dca2dc63d9abe623a6b09f1b"
  },
  {
    "url": "js/manifest.js",
    "revision": "927d8d5f8423cb0f583f44e1852785f6"
  },
  {
    "url": "manifest.json",
    "revision": "a7abb18670524fcdcc3e255037ae42a3"
  },
  {
    "url": "mix-manifest.json",
    "revision": "7a2650ab59828657c8c3563e60a57d79"
  },
  {
    "url": "robots.txt",
    "revision": "b6216d61c03e6ce0c9aea6ca7808f7ca"
  },
  {
    "url": "web.config",
    "revision": "50e9a0f34b264670691691d406428d75"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
