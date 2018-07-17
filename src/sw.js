/* eslint-disable no-undef */
workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "google-fonts"
  })
);

const bgSyncPlugin = new workbox.backgroundSync.Plugin("queue", {
  maxRetentionTime: 24 * 60
});

workbox.routing.registerRoute(
  /https:\/\/peaceful-depths-89916.herokuapp.com\/.*/,
  workbox.strategies.networkOnly({
    plugins: [bgSyncPlugin]
  }),
  "PUT"
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
