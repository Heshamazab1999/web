'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8abe667da876ed4dad7f7edc6ae6c1ab",
"assets/assets/fonts/Appointements.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/nabbdaIcons.ttf": "c14bb781d237c71dad058dad2e64ca93",
"assets/assets/fonts/NavigationBarIcons.ttf": "eb6bacd6be705cd4e67405b10e72263c",
"assets/assets/images/appointments.svg": "3e7a6b285eee0b75a665d4da9b64530e",
"assets/assets/images/arteries.svg": "1ec37364d736b7d29770688f40ce4677",
"assets/assets/images/ASCVD.svg": "f37ac5884eaaada4fff5fa7b01827a87",
"assets/assets/images/atherosclerosis.svg": "4edab46907a4a5420c27fee63fe1d40a",
"assets/assets/images/atmCard.svg": "1e343bb3591d99882aa8638c7a2fe642",
"assets/assets/images/avatar.png": "6d891fb2cb9b2704c0137a6940af7f04",
"assets/assets/images/Bank1.png": "ae985f3bcd8f427e788f0dd47304ee1a",
"assets/assets/images/Bank2.png": "2d420994ccbf4db5cbb2a23f713a392c",
"assets/assets/images/Bank3.png": "97133b6ef8d0af79c2fae7f88c497fc1",
"assets/assets/images/blood.svg": "9326275c8d06e1fff3ea86d4b1ef2381",
"assets/assets/images/bmi.svg": "58028db8e2faf34fc5f82ec913e83cda",
"assets/assets/images/bmr.svg": "c94dd204262fa9801d0bb0ea855d85ef",
"assets/assets/images/calc1.svg": "98e599aa8dfc2eabd1b8892f5691a024",
"assets/assets/images/calc2.svg": "bbb1aa8310cdeb8e278340b329c639b4",
"assets/assets/images/calc3.svg": "c94dd204262fa9801d0bb0ea855d85ef",
"assets/assets/images/cancel.svg": "aa0e92ea75b39516a459c08310f458e1",
"assets/assets/images/changeProfilePicture.jpg": "55a61736cbbe7a0cbca15920de2e1c90",
"assets/assets/images/chemistry.svg": "bcd21bebf630b51757403034508becd1",
"assets/assets/images/code.svg": "50ec9dd83d4e293eb76581e4501d4829",
"assets/assets/images/CreditCard.png": "2d420994ccbf4db5cbb2a23f713a392c",
"assets/assets/images/data.png": "de324639c0035f5ad0099c24e622db7d",
"assets/assets/images/Data.svg": "95024b8bcf2c907e3069aad5e5d0cff4",
"assets/assets/images/delete.svg": "8ddc825e8476e9f776af87bb26b14328",
"assets/assets/images/diabetes.svg": "bbb1aa8310cdeb8e278340b329c639b4",
"assets/assets/images/docum.svg": "52d1094916c7510109541f15329362bb",
"assets/assets/images/DrMohamed.png": "b9a4c246329713aa983058c8434daa58",
"assets/assets/images/DrMohamed.svg": "d9be2c8e7aeaf911d243245664b84e96",
"assets/assets/images/Ellipse%2520173.svg": "ace45708d0326de6ff1cc8deea47f17b",
"assets/assets/images/Error.svg": "594faf2f853bec46576ed293bfc8f901",
"assets/assets/images/exercise.png": "807986230e5146983a186bddf9ce3b4e",
"assets/assets/images/exerciseBG.png": "0ab97055517dd81002fda3189d894966",
"assets/assets/images/favourites.svg": "bc9640e4d223388e546b513deba61e97",
"assets/assets/images/Female.png": "f0a7733146037797ca465646f2f8f82b",
"assets/assets/images/Female.svg": "7a40945386a5421f77baad1298e6c987",
"assets/assets/images/FemaleBmi.svg": "7a40945386a5421f77baad1298e6c987",
"assets/assets/images/files.svg": "bcd21bebf630b51757403034508becd1",
"assets/assets/images/food.png": "77f4892536f8bd8f6e9f07d02142159a",
"assets/assets/images/food.svg": "dca6e2039b66f1594533bc5f684822b9",
"assets/assets/images/Fruits%2520&%2520Vegetables.png": "66787816398eab5dd25f06e9f88b3477",
"assets/assets/images/fruits.png": "2c5517f8e867d7ae8b366a5da65e0e90",
"assets/assets/images/fruits.svg": "947a142c0835fe9296d013d624479df0",
"assets/assets/images/goo.svg": "f10e49fb950b932ff54b2108d4e60a32",
"assets/assets/images/graphic.svg": "7916beb2b4794736b07c42a8af9932b9",
"assets/assets/images/Group%25208994.jpg": "86a05e5d63c3e5745850e62601007779",
"assets/assets/images/Group.svg": "0282b2d79a84ea2a8f1413fbce48cdd2",
"assets/assets/images/health.svg": "80706e9c6e80f32f7b9ee205ac08905a",
"assets/assets/images/Heart.png": "4f6f6089883664488a0fd6af4f5a1077",
"assets/assets/images/heart.svg": "c8ca3b6393a89f249e01c61bb3814e1b",
"assets/assets/images/heart1.svg": "dab8999335d84c927e3a757e956ddad9",
"assets/assets/images/heartbeat.svg": "bd5f5720066683fded2bdaf2ed57f4cb",
"assets/assets/images/heartRisk.svg": "dab8999335d84c927e3a757e956ddad9",
"assets/assets/images/hearts.svg": "a8d06066a10b42ea520d9769caad4f69",
"assets/assets/images/Hemoglobin.svg": "197576fca1c3581c5e079cc66b6a6a69",
"assets/assets/images/high.svg": "b9636cb4505ce604514ebef1370e96cf",
"assets/assets/images/home.png": "3e94196bd398aa68b0f2984bdb483adc",
"assets/assets/images/loading.json": "fb54677f8458b0f168a60ec2f18bd3d4",
"assets/assets/images/lock.svg": "ee2ab05f8793b485f73d03e4afe41603",
"assets/assets/images/low.svg": "af4e891b3ac7a380c7bafae9eb0d3207",
"assets/assets/images/lungs.svg": "74d0fbd62d572b07528daf1ed44ea878",
"assets/assets/images/mail.svg": "cc521d2df731283bc58ef86f39996540",
"assets/assets/images/Male.png": "e84b997278f1d57c1f42f035ce437ab1",
"assets/assets/images/Male.svg": "b790feaa9415d4e8cb0ef48446d3d2a8",
"assets/assets/images/MaleBmi.svg": "b790feaa9415d4e8cb0ef48446d3d2a8",
"assets/assets/images/mastercard.svg": "d36b0a68c318c3c74d478e69b3a4e87d",
"assets/assets/images/med1.svg": "b12350e944796c46e6c22836f25eb687",
"assets/assets/images/med2.svg": "caf7b3f45c29d3988da2523f7d707319",
"assets/assets/images/med3.svg": "7323eea566eb57503441c7dd2cc21596",
"assets/assets/images/med4.svg": "d88aebf617a2448b68a4a9c5b7108956",
"assets/assets/images/medical.png": "3567481de1fad584388fa60f5795bb5d",
"assets/assets/images/medical.svg": "53548af8cc7e8ae58f39b7d2af119711",
"assets/assets/images/medical2.svg": "0574ee9fe974d37978ce69f80e9e9a3a",
"assets/assets/images/mental.svg": "d0f38042853d29afd76d771cc86880d0",
"assets/assets/images/nabbda.svg": "4e9228f40cc20b9900b8b744c8439205",
"assets/assets/images/network.json": "858930d80b3cef5331a6614ae01fb36a",
"assets/assets/images/next.svg": "a1ba186a19b358e749a6bfae195b9c27",
"assets/assets/images/Notifications.png": "5d3ea77f23b4650b21bff5e9de165bcf",
"assets/assets/images/onBoarding1.svg": "a0db9aca758f26abe9439cdff8dc612b",
"assets/assets/images/onBoarding2.svg": "ccba4d60f5c0eb002c4912db7e45b396",
"assets/assets/images/onBoarding3.svg": "347d6de38b65054464193061c29be0e3",
"assets/assets/images/onBoarding4.svg": "3eb3acce55a7bebece459fd3df5b26df",
"assets/assets/images/open.png": "5705cb93cff885a7c7a70af1a65f2705",
"assets/assets/images/open.svg": "7e6d2669518a14d0edd03e07fa07e02c",
"assets/assets/images/p.svg": "4e9228f40cc20b9900b8b744c8439205",
"assets/assets/images/patient.jpg": "d554f68d1e1072a18f93f148f78ed895",
"assets/assets/images/PayPal.png": "ae985f3bcd8f427e788f0dd47304ee1a",
"assets/assets/images/percent.svg": "0e537d868b2e0e71d4472bf2f169168f",
"assets/assets/images/person.svg": "8dc809ea34ab3637cbef6ee065c3a69a",
"assets/assets/images/Pill.svg": "f873df86fa83cb8cf5ff1de378721735",
"assets/assets/images/placeholder.svg": "0483d4cd5f76225b3f63480fd0ae5fcb",
"assets/assets/images/pres.png": "405f26c5fe1fe963ebd051e81ba823f1",
"assets/assets/images/pres.svg": "5dc6a70b3cda456be194c964c0d8472b",
"assets/assets/images/present.svg": "636654c74e6782887918f3792a902695",
"assets/assets/images/Price.svg": "ce3987aeffc1502946b01c611759c774",
"assets/assets/images/pules.svg": "8a0b7b231ab107c4b8d1ca6e617f8ecb",
"assets/assets/images/qxmd.svg": "ab19896c25f256dd41eeb1c5adca9540",
"assets/assets/images/received.svg": "87891477bcbce458bde5efe0435e3ba9",
"assets/assets/images/reg.png": "e84b997278f1d57c1f42f035ce437ab1",
"assets/assets/images/regist.png": "c6fbb6ea96fc073e0335a043aca3b64f",
"assets/assets/images/regist.svg": "c383c9bd560b2c0960ef59a24f0520c7",
"assets/assets/images/remember.png": "53b6b5bbd144a0682a471d074b856ee9",
"assets/assets/images/remember2.png": "c20808d957eec63eb06745525f37a055",
"assets/assets/images/remember3.png": "fe369a8502dde757d31fe57e86c346c9",
"assets/assets/images/Reminders.png": "15f9e827b91b46e4a61c2f07d1d9550a",
"assets/assets/images/Report.jpg": "86a05e5d63c3e5745850e62601007779",
"assets/assets/images/reportt.png": "1644ec7c72d2d4998ef58fb844ec4a1d",
"assets/assets/images/reportt.svg": "d3a4542ceb58ee6ee5d5a70bdcc949f5",
"assets/assets/images/result.svg": "a3bb25b6b61994804a9017d433d526f9",
"assets/assets/images/SavedCard.png": "97133b6ef8d0af79c2fae7f88c497fc1",
"assets/assets/images/selectShare.svg": "9c193e1328b4f01e9e49ea0af7293516",
"assets/assets/images/Sent.png": "44a43ca845a4649ad7fe75a27685b583",
"assets/assets/images/settings.svg": "2f3b97187f8713aa894ad3d1415d4cc3",
"assets/assets/images/Shape.svg": "2dd3a527bdffc93c77d33e284e9190fe",
"assets/assets/images/share.png": "50cdd9ae88c489b75acdf6c83c5630b0",
"assets/assets/images/shareResult.svg": "ea41abafbc000275eb20343e904bb484",
"assets/assets/images/star.png": "356ce682adb469eeecc12c90cbf68f4d",
"assets/assets/images/Stroke.svg": "0859f44f959c9719d5015e7f89ede498",
"assets/assets/images/strokeRisk.svg": "70235d27a70337bcb907407de4d591bf",
"assets/assets/images/success.svg": "5c400c30e8ffa5cdeb9f92572a7967df",
"assets/assets/images/success_payment.svg": "79d608ef9eda99ac9d461eb4e5aa9b16",
"assets/assets/images/sugar.svg": "556726f05bba96c01fad8aab70359ac4",
"assets/assets/images/thermometer.svg": "f4946642837842a9f0a26a1a600c0eee",
"assets/assets/images/timer.svg": "536d293d8ebf452554ec62302dabc9f7",
"assets/assets/images/Track.jpg": "1d8f36f8a552e6edf33de6ddce39c1ca",
"assets/assets/images/Union.svg": "fb5764aeb62b7d1cd3b9b239518b14e9",
"assets/assets/images/upload.svg": "5b82fdaaa126795d24ec56428cdc5927",
"assets/assets/images/uploaded.svg": "82050c8f5656db86b609834d09831d81",
"assets/assets/images/uploadedReport1.png": "4cd2f80c8a5b6e1ad72c1192c6680f0d",
"assets/assets/images/uploadedReport1.svg": "9d3627e171171ffc00fa24d6be697830",
"assets/assets/images/uploadedReport2.png": "64e602296cf560d7c1f24f9d3548ed15",
"assets/assets/images/uploadedReport2.svg": "d4091087ceea4d7ab1c00002187c60d7",
"assets/assets/images/user.svg": "216bcfc8f10098ca767d92fb2df519b7",
"assets/assets/images/userOnline.svg": "30d782364944b08ec83d5d86dd4baf14",
"assets/assets/images/video.svg": "7ee00ea14ba7a48d260094354800a69e",
"assets/assets/images/videocam.svg": "f1a73bd5aae623333da0a648210aedd6",
"assets/assets/images/visa.svg": "6cbb793c58f6cdbeb92ce07bbb922885",
"assets/assets/images/vital.svg": "d6d4bbb99a5b1cf1f79879105edf4ea1",
"assets/assets/images/wave.png": "517cfefed5c1feaebcbcbdedb9fb166b",
"assets/assets/images/wristwatch.svg": "a9a93aa1e5eff9f7b4f435279bcaf41b",
"assets/FontManifest.json": "b395d6dcd8ca16bb7933657e39d4afd2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "bd72d59df9184eaa2885110285d38064",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1042a8b3374e1d1ec42bbc0fa9a5a3a6",
"/": "1042a8b3374e1d1ec42bbc0fa9a5a3a6",
"main.dart.js": "727965ec06fba20174e2e0df0a7abc14",
"manifest.json": "811adbfb58ff0639cd346ed8fce1cb12",
"version.json": "a9c3aab0a8f162e952e1b4e769f66b5a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
