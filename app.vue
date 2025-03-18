<template>
  <div>
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">ZXing - Leitor de Código</h1>
      <ZxingScanner />
    </div>
  </div>
</template>
<script setup>
useHead({
  meta: [
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "ZXing - Leitor de Código",
    },
  ],
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
  ],
});
</script>
