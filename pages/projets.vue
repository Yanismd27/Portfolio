// pages/projets.vue
<template>
  <main>
    <div class="relative w-full h-screen bg-black">
      <h2 class="absolute top-8 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-black z-10">
        Mes Projets
      </h2>
      <ClientOnly>
        <ThreeGallery />
      </ClientOnly>
    </div>
  </main>
</template>