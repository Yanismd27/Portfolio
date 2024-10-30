<template>
    <div 
      class="min-h-screen bg-white dark:bg-gray-900 relative"
      @mousemove="handleMouseMove"
      ref="pageWrapper"
    >
      <!-- Background Gradient Animation -->
      <div 
        class="fixed inset-0 pointer-events-none z-10 opacity-50 transition-opacity duration-500"
        :style="gradientStyle"
      ></div>
  
      <!-- Home Button avec animation -->
      <div class="absolute top-8 left-8 z-50">
        <NuxtLink 
          to="/"
          class="editorial-button group inline-flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          @mouseenter="handleHomeHover"
          @mouseleave="handleHomeLeave"
          aria-label="Retour à l'accueil"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 transform transition-transform duration-300" 
            :class="{ '-translate-x-1': isHomeHovered }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
            />
          </svg>
        </NuxtLink>
      </div>
  
      <!-- Dark Mode Toggle avec animation améliorée -->
      <div class="absolute top-8 right-8 z-50">
        <button 
          @click="toggleDark"
          @mouseenter="handleDarkModeHover"
          @mouseleave="handleDarkModeLeave"
          class="editorial-button group inline-flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          aria-label="Toggle dark mode"
        >
          <span 
            class="dark-mode-icon relative transform transition-all duration-300"
            :class="{ 'scale-110': isDarkModeHovered }"
          >
            <span 
              v-if="isDark" 
              class="flex items-center text-yellow-500 transition-all duration-500"
              :class="{ 'rotate-180': isDarkModeHovered }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
              </svg>
            </span>
            <span 
              v-else 
              class="flex items-center text-gray-700 dark:text-gray-300 transition-all duration-500"
              :class="{ 'rotate-180': isDarkModeHovered }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            </span>
          </span>
        </button>
      </div>
  
      <!-- Header avec animation -->
      <div 
        ref="headerRef"
        class="relative overflow-hidden bg-white dark:bg-gray-900 z-20"
      >
        <div 
          class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"
          :style="contentStyle"
        >
          <h1 
            class="text-4xl font-light tracking-tight text-gray-900 dark:text-white sm:text-6xl font-italiana transform transition-all duration-500"
            :style="titleStyle"
          >
            Blog
          </h1>
          <p 
            class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 font-prata transform transition-all duration-500"
            :style="subtitleStyle"
          >
            Découvrez mes articles sur le développement web, le design et mes expériences.
          </p>
        </div>
      </div>
  
      <!-- Articles Grid avec animations -->
      <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-24 relative z-20">
        <div v-if="posts?.length" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article 
            v-for="(post, index) in posts" 
            :key="post._path" 
            class="flex flex-col overflow-hidden rounded-lg shadow-lg dark:shadow-gray-700/10 transition-all duration-500 bg-white dark:bg-gray-800 transform"
            :class="{ 'article-hover': hoveredArticle === index }"
            @mouseenter="handleArticleHover(index)"
            @mouseleave="handleArticleLeave"
          >
            <NuxtLink :to="post._path" class="h-full">
              <div class="flex-shrink-0 overflow-hidden">
                <img 
                  v-if="post.cover" 
                  :src="post.cover" 
                  :alt="post.title" 
                  class="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div 
                  v-else 
                  class="h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                >
                  <span class="text-gray-400 dark:text-gray-500">Pas d'image</span>
                </div>
              </div>
              <div class="flex flex-1 flex-col justify-between p-6">
                <div class="flex-1">
                  <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <time :datetime="post.date">
                      {{ new Date(post.date).toLocaleDateString('fr-FR', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      }) }}
                    </time>
                    <span v-if="post.readingTime">· {{ post.readingTime }} min de lecture</span>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white font-italiana transition-colors duration-300">
                    {{ post.title }}
                  </h3>
                  <p class="mt-3 text-base text-gray-600 dark:text-gray-300 line-clamp-3 font-prata">
                    {{ post.description }}
                  </p>
                </div>
                <div class="mt-4">
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tag in post.tags" 
                      :key="tag"
                      class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
        
        <!-- Message si pas d'articles -->
        <div v-else class="text-center py-12">
          <p class="text-gray-600 dark:text-gray-400 font-prata">
            Aucun article pour le moment. Revenez bientôt !
          </p>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import gsap from 'gsap';
  
  // Refs et états
  const pageWrapper = ref(null);
  const headerRef = ref(null);
  const isHomeHovered = ref(false);
  const isDarkModeHovered = ref(false);
  const hoveredArticle = ref(null);
  const mousePosition = ref({ x: 0, y: 0 });
  
  // SSR-safe window dimensions
  const windowDimensions = ref({ width: 0, height: 0 });
  
  // Update window dimensions safely
  const updateWindowDimensions = () => {
    if (process.client) {
      windowDimensions.value = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  };
  
  // Dark mode
  const colorMode = useColorMode();
  const isDark = computed(() => colorMode.value === 'dark');
  const toggleDark = () => {
    if (!process.client) return;
    
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
    
    gsap.to(".dark-mode-icon", {
      duration: 0.6,
      scale: 1.2,
      rotate: isDark.value ? 360 : 0,
      ease: 'elastic.out(1, 0.5)',
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        gsap.to(".dark-mode-icon", {
          duration: 0.3,
          scale: 1,
          ease: 'power2.out'
        });
      }
    });
  };
  
  // Articles data
  const { data: posts } = await useAsyncData('posts', () => queryContent('/blog')
    .sort({ date: -1 })
    .find()
  );
  
  // Computed styles avec SSR safety
  const gradientStyle = computed(() => {
    if (!process.client) return {};
    
    return {
      background: `radial-gradient(
        600px circle at ${mousePosition.value.x}px ${mousePosition.value.y}px,
        ${isDark.value ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'},
        transparent 40%
      )`
    };
  });
  
  const contentStyle = computed(() => {
    if (!process.client) return {};
    
    const moveX = (mousePosition.value.x / windowDimensions.value.width - 0.5) * 20;
    const moveY = (mousePosition.value.y / windowDimensions.value.height - 0.5) * 20;
    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
      transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)'
    };
  });
  
  const titleStyle = computed(() => {
    if (!process.client) return {};
    
    const moveX = (mousePosition.value.x / windowDimensions.value.width - 0.5) * 40;
    const moveY = (mousePosition.value.y / windowDimensions.value.height - 0.5) * 40;
    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
      transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)'
    };
  });
  
  const subtitleStyle = computed(() => {
    if (!process.client) return {};
    
    const moveX = (mousePosition.value.x / windowDimensions.value.width - 0.5) * 30;
    const moveY = (mousePosition.value.y / windowDimensions.value.height - 0.5) * 30;
    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
      transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)'
    };
  });
  
  // Event handlers
  const handleMouseMove = (e) => {
    if (!pageWrapper.value || !process.client) return;
    mousePosition.value = {
      x: e.clientX,
      y: e.clientY
    };
  };
  
  const handleHomeHover = () => isHomeHovered.value = true;
  const handleHomeLeave = () => isHomeHovered.value = false;
  const handleDarkModeHover = () => isDarkModeHovered.value = true;
  const handleDarkModeLeave = () => isDarkModeHovered.value = false;
  
  const handleArticleHover = (index) => {
    if (!process.client) return;
    
    hoveredArticle.value = index;
    gsap.to(`article:nth-child(${index + 1})`, {
      y: -8,
      scale: 1.02,
      duration: 0.4,
      ease: 'power2.out'
    });
  };
  
  const handleArticleLeave = () => {
    if (!process.client) return;
    
    const previousIndex = hoveredArticle.value;
    if (previousIndex !== null) {
      gsap.to(`article:nth-child(${previousIndex + 1})`, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
    hoveredArticle.value = null;
  };
  
  // Lifecycle hooks
  onMounted(() => {
    if (process.client) {
      updateWindowDimensions();
      window.addEventListener('resize', updateWindowDimensions);
      
      gsap.from('article', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }
  });
  
  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('resize', updateWindowDimensions);
    }
    mousePosition.value = { x: 0, y: 0 };
  });
  </script>
  