<template>
    <div 
      ref="container" 
      class="three-container"
    ></div>
  </template>
  
  <script setup>
  import { onMounted, ref, onBeforeUnmount } from 'vue';
  
  const container = ref(null);
  const emit = defineEmits(['click']);
  
  // Définissez vos props si nécessaire
  const props = defineProps({
    // vos props
  });
  
  onMounted(() => {
    if (process.client) {
      // Votre logique Three.js ici
    }
  });
  
  onBeforeUnmount(() => {
    // Cleanup
  });
  </script>
  
  <style scoped>
  .three-container {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 100vh !important;
    z-index: 40 !important;
    pointer-events: none !important;
    perspective: 1000px;
    transition: filter 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  </style>