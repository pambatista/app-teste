<template>
  <div>
    <h3>ZXing Scanner ...</h3>
    <ZxingScanner />

    <button class="botao" @click="$pwa.install()">Install</button>

    <div class="mt-4">PWA Installed: {{ $pwa?.isPWAInstalled }}</div>
  </div>
</template>

<script setup></script>

<style>
.botao {
  background: #42b883;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
}
</style>
