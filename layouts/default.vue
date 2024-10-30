// layouts/default.vue
<template>
  <div class="min-h-screen flex flex-col">
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue';
import '~/assets/css/transitions.css';
</script>