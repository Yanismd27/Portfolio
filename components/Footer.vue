// components/Footer.vue
<template>
  <footer class="bg-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-600 mb-4 md:mb-0">
          © {{ new Date().getFullYear() }} Yanis Meddour. Tous droits réservés.
        </div>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-600 hover:text-gray-900">
            LinkedIn
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-900">
            GitHub
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-900">
            Twitter
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>