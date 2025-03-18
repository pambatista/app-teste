<template>
  <div>
    <video
      ref="videoRef"
      class="w-full max-w-md rounded border shadow"
      autoplay
      muted
      playsinline
    ></video>

    <div class="mt-4 p-2 bg-green-100 text-green-800 rounded">
      Código detectado: <strong>{{ scannedResult }}</strong>
    </div>

    <div class="mt-4">
      <button
        v-if="!scanning"
        @click="startScanner"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Iniciar Scanner
      </button>

      <button
        v-if="scanning"
        @click="stopScanner"
        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Parar Scanner
      </button>
    </div>
  </div>
</template>

<script setup>
import { BrowserQRCodeReader, BrowserMultiFormatReader } from "@zxing/browser";

const videoRef = ref(null);
const scannedResult = ref(null);
const scanning = ref(false);

const codeReader = new BrowserMultiFormatReader();
let controls = null;

const startScanner = async () => {
  try {
    scanning.value = true;
    scannedResult.value = null;

    controls = await codeReader.decodeFromVideoDevice(
      null, // usa a câmera padrão (traseira em celular)
      videoRef.value,
      (result, err) => {
        if (result) {
          scannedResult.value = result.getText();
          stopScanner();
        }
      }
    );
  } catch (error) {
    console.error("Erro ao iniciar scanner:", error);
    scanning.value = false;
  }
};

const stopScanner = () => {
  scanning.value = false;
  if (controls) {
    controls.stop();
    controls = null;
  }
};

const requestCameraPermission = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    stream.getTracks().forEach((track) => track.stop()); // Fecha a câmera após testar
    console.log("Permissão concedida!");
  } catch (error) {
    console.error("Permissão negada ou erro na câmera:", error);
  }
};

// onMounted(() => {
//   requestCameraPermission();
// });

onUnmounted(() => {
  stopScanner();
});
</script>
