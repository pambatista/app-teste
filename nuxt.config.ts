// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@vite-pwa/nuxt"],

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Meu App",
      short_name: "MeuApp",
      description: "Um PWA para ler QR Codes",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone", // 🔹 Permite abrir sem barra de endereços
      start_url: "/", // 🔹 Garante que abra na página inicial
      scope: "/",
      icons: [
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/seu-api\.com\//,
          handler: "NetworkFirst",
          options: {
            cacheName: "api-cache",
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 86400,
            },
          },
        },
      ],
    },
  },
  app: {
    baseURL: "/",
  },
});
