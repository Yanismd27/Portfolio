<template>
    <nav class="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-white">
              MonPortfolio
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path"
              class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Projets', path: '/projets' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]
  </script>