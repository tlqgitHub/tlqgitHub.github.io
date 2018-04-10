/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2018/04/10/hello-world/index.html","b3b6bb435f6b3b0118a7a724ddd24113"],["archives/2018/04/index.html","a195cb0a96cad18750c1e6d54e39e000"],["archives/2018/index.html","e73070c312c05b8779c749d40a3b39c1"],["archives/index.html","f6726fea0110d22483c9ea93e35d5dc0"],["css/base/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["css/base/normalize.css","849bd17d56ee28b33f218d3f51ce373c"],["css/base/reset.css","43b09c33c051a39cd12401cbc548f894"],["css/bootstrap.css","3b01f8a213629dba1a284b8dfb13ab2b"],["css/comment-ds.css","75758dedcd3cd5dbfb371cb570a9c1d9"],["css/comment-gitment.css","d81f2524a028c248cfb2a6696e7d2f76"],["css/components/archive.css","919aa0407753d356593a79d5b4839a32"],["css/components/article.css","249513e9c0a9a0ba2fda7b4fabe7e4df"],["css/components/categories.css","8ad809048c610c0403389d04db75092f"],["css/components/footer.css","287e82250729de8f3212076a841d43d9"],["css/components/header.css","0a1c5a08bdbfd89ef1525c9a892bc2da"],["css/components/icon.css","278490e940c6ca7331b1ff376c4624bf"],["css/components/layout.css","ba66046eecabea1b0bfab5608bb052da"],["css/components/pagination.css","9544dbaf6ab1d7cfee8acaebcff8e724"],["css/components/responsive.css","84983828b65403ff5d6a228344fd18ce"],["css/components/search.css","a3b88d0de0ebabdfefab34ae0f8d9d7e"],["css/components/sidebar.css","85f8550a7d5a370d213782f19dbbbfe2"],["css/components/syntax.css","df0b792eb8cb3d04c750cbdfa357f061"],["css/components/tags.css","af36db8e3eab94617cc00471a343c931"],["css/components/toc.css","747edd0c249bd01bc89c196d55746fad"],["css/fonts/athemes-glyphs.woff","7fbe672b4bf4e8ee6fc58745317a5446"],["css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["css/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["css/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["css/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["css/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["css/glyphs.css","107395d440b6a208817456d9ee12407b"],["css/hiero.css","49d13e15c0e4b8df4b42d76dded650f2"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/images/pose.jpg","5451f0515b241f783664f37b8a16763d"],["css/images/rocket.png","86bc957214bc1c780383c93a778e5e3c"],["css/my.css","11a6539e4b5cc8672c755a1b9c31537c"],["css/style.css","a419c9311869635bb8a81549a0cd81a8"],["css/vdonate.css","07c4235e0f77f0d8d7138b580f10e4c0"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["images/bg.jpg","403dea8ec58af59de6e3411f05a86ae2"],["images/blog-bg.jpg","ef3b12051b4e240ed112d15b0e5fd38e"],["images/icon-heart.svg","e80fd14ed816091e9bb0ac9a8f353077"],["images/lofter.png","c06168eb26f5e48d7ea44b1de28aacbd"],["images/top-active.png","02e0be375bd990075ae7984107e541de"],["images/top.png","b825d3b3aa4236f6f36c10cbcefce55c"],["images/zhihu0.png","ccf19cffa4e138ed30b021ecec393bbe"],["index.html","0e2e6def76e7568bd12d59d45a225373"],["js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["js/index.js","1ab9a61c7a11df4f2d970c206d1cfc9c"],["js/insight.js","b64d5b2fbe695af7dd92909a20f70836"],["js/jquery-3.1.1.min.js","e071abda8fe61194711cfc2ab99fe104"],["js/main.js","a23c918fc0df9c6880b589c46b565e4d"],["js/my.js","126fda5a290046ca2755112fe86f1440"],["js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["js/scripts.js","bf404433cf044e18cc8fea42546247dd"],["js/search.js","69d32a01547e94351cf8bbe3de1e7551"],["js/totop.js","ffb8be9a10d1321081b57916a363d297"],["js/vdonate.js","75a09c9ceb7301a89650dba86ddcf0f2"],["js/web-pinyin.js","4f2b569d95a00edc9f24e4d7866e4638"],["preview/Hiero_home.png","413177d0b68b1982b0a5791d44859a15"],["preview/browser-support.png","0ac8a481d0e40e448e677e5b909910e8"],["preview/code-default-preview.png","f69ee26ccfee0f063ca8e287221a6065"],["preview/code-theme.jpg","775938429ee2344345ca904349f876ef"],["preview/logo-preview.jpg","34b83daa1d56a320eb2c5972be9b5c4c"],["preview/mobile-preview.png","f03405c243b81b6b372afb76453db727"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







