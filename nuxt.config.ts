// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"],

  pwa: {
    registerType: "autoUpdate", // Atualiza automaticamente o service worker
    manifest: {
      name: "Meu App PWA",
      short_name: "MeuPWA",
      description: "Meu primeiro PWA com Nuxt 3!",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
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
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    devOptions: {
      enabled: true, // Habilita o PWA em ambiente de desenvolvimento
      type: "module",
    },
  },
});
