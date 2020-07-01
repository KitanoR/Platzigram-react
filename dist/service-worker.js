/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-99319794'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/0.app.bundle.js",
    "revision": "57250f01d664efb23c5472a265126694"
  }, {
    "url": "/1.app.bundle.js",
    "revision": "df50970133f801d9532c739066713d9c"
  }, {
    "url": "/2.app.bundle.js",
    "revision": "3b12436eadb07f70b9a3ad92314a4a36"
  }, {
    "url": "/3.app.bundle.js",
    "revision": "76f3e4fee82353f4d12ed577af71177c"
  }, {
    "url": "/4.app.bundle.js",
    "revision": "55f2d4449eec4defccbb0b82f52abcab"
  }, {
    "url": "/5.app.bundle.js",
    "revision": "314f3ff4d3ba0826a898babb69f933fc"
  }, {
    "url": "/icon_128x128.6604c172e8ce4af7fbfa57c27d021c51.png",
    "revision": "6604c172e8ce4af7fbfa57c27d021c51"
  }, {
    "url": "/icon_192x192.90b0066825ca5de6736df558ac2e3d28.png",
    "revision": "90b0066825ca5de6736df558ac2e3d28"
  }, {
    "url": "/icon_256x256.ec379c2f555469a2eae002ecb797de61.png",
    "revision": "ec379c2f555469a2eae002ecb797de61"
  }, {
    "url": "/icon_384x384.1b3dd1daeb0fae568378c939c236d79b.png",
    "revision": "1b3dd1daeb0fae568378c939c236d79b"
  }, {
    "url": "/icon_512x512.6347ff3bd381b29aff5d609e848eb7d9.png",
    "revision": "6347ff3bd381b29aff5d609e848eb7d9"
  }, {
    "url": "/icon_96x96.ea8ccf240813799ababb948f696bab65.png",
    "revision": "ea8ccf240813799ababb948f696bab65"
  }, {
    "url": "/index.html",
    "revision": "55a33941e6b9cb9a5194d26c6abcae15"
  }, {
    "url": "/manifest.311fb032a10ce38102e8c21e57415061.json",
    "revision": "311fb032a10ce38102e8c21e57415061"
  }], {});
  workbox.registerRoute(/https:\/\/(res.cloudinary.com | images.unsplash.com)/, new workbox.CacheFirst({
    "cacheName": "images",
    plugins: []
  }), 'GET');
  workbox.registerRoute(/https:\/\/petgram-server-caye-96c8a0wec.now.sh/, new workbox.NetworkFirst({
    "cacheName": "api",
    plugins: []
  }), 'GET');

});
//# sourceMappingURL=service-worker.js.map
