<template>
  <div>
    <!-- Overlay -->
    <div 
      v-if="isOpen"
      class="fixed inset-0 bg-black/90 backdrop-blur-lg z-[60] cursor-pointer"
      @click="close"
    />

    <!-- Lightbox -->
    <div v-if="showLightbox" class="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center">
      <!-- Close button -->
      <button 
        @click="closeLightbox"
        class="absolute top-4 right-4 text-white/80 hover:text-white p-2"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Previous button -->
      <button 
        @click="previousImage"
        class="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <!-- Next button -->
      <button 
        @click="nextImage"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      <!-- Image -->
      <div class="max-w-[90vw] max-h-[90vh]">
        <img 
          :src="currentImage.url" 
          :alt="currentImage.alt"
          class="max-w-full max-h-[85vh] object-contain"
        />
        <div class="mt-4 text-center">
          <p class="text-white text-lg font-prata">{{ currentImage.description }}</p>
          <span class="text-white/60 text-sm font-prata">{{ currentImage.category }}</span>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="isOpen && project"
      class="fixed z-[70] overflow-y-auto bg-white dark:bg-gray-900"
      :style="{
        position: 'fixed',
        width: `${currentRect.width}px`,
        height: `${currentRect.height}px`,
        left: `${currentRect.left}px`,
        top: `${currentRect.top}px`,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }"
    >
      <!-- Project Content -->
      <div class="relative w-full h-full flex flex-col">
        <!-- Close Button -->
        <button 
          @click="close"
          class="absolute top-6 right-6 z-10 p-2 text-white/80 hover:text-white transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Hero Image -->
        <div class="w-full h-[60vh] relative">
          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content -->
        <div class="flex-1 px-8 py-12">
          <div class="max-w-6xl mx-auto">
            <!-- Project Header -->
            <div class="mb-16 text-center">
              <h2 class="text-4xl font-light mb-6 text-gray-900 dark:text-white font-italiana">
                {{ project.title }}
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 font-prata">
                {{ project.description }}
              </p>
              <div class="flex justify-center gap-6">
                <a v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-prata hover:opacity-90 transition-opacity"
                >
                  Voir le site
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-6 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-prata hover:opacity-90 transition-opacity"
                >
                  Code source
                </a>
              </div>
            </div>

            <!-- Project Gallery -->
            <div class="mb-16">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white font-prata mb-8">
                Galerie du projet
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div 
                  v-for="(image, index) in project.gallery" 
                  :key="image.url"
                  class="gallery-item cursor-pointer"
                  @click="openLightbox(index)"
                >
                  <div class="aspect-w-16 aspect-h-12">
                    <img 
                      :src="image.url" 
                      :alt="image.alt"
                      class="w-full h-full object-cover hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div class="py-4">
                    <p class="text-gray-600 dark:text-gray-300 text-sm font-prata mb-2">
                      {{ image.description }}
                    </p>
                    <span class="text-xs text-gray-500 dark:text-gray-400 font-prata">
                      {{ image.category }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Details -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <!-- Sidebar -->
              <div class="lg:col-span-4">
                <div class="space-y-8">
                  <div>
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white font-prata">
                      Technologies
                    </h3>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="tech in project.technologies"
                        :key="tech"
                        class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm font-prata"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white font-prata">
                      Rôle
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 font-prata">
                      {{ project.role }}
                    </p>
                  </div>

                  <div>
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white font-prata">
                      Année
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 font-prata">
                      {{ project.year }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Main Content -->
              <div class="lg:col-span-8">
                <div class="space-y-16">
                  <div 
                    v-for="(section, index) in project.content"
                    :key="index"
                    class="space-y-6"
                  >
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white font-prata">
                      {{ section.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed font-prata">
                      {{ section.text }}
                    </p>
                    <img
                      v-if="section.image"
                      :src="section.image?.url || section.image"
                      :alt="section.image?.alt || section.imageAlt"
                      class="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  project: Object,
  initialRect: Object
})

const emit = defineEmits(['close'])
const isContentVisible = ref(false)
const showLightbox = ref(false)
const currentImageIndex = ref(0)

// Lightbox controls
const currentImage = computed(() => {
  if (!props.project?.gallery?.length) return null
  return props.project.gallery[currentImageIndex.value]
})

const openLightbox = (index) => {
  currentImageIndex.value = index
  showLightbox.value = true
}

const closeLightbox = () => {
  showLightbox.value = false
}

const nextImage = () => {
  if (!props.project?.gallery?.length) return
  currentImageIndex.value = (currentImageIndex.value + 1) % props.project.gallery.length
}

const previousImage = () => {
  if (!props.project?.gallery?.length) return
  currentImageIndex.value = currentImageIndex.value === 0 
    ? props.project.gallery.length - 1 
    : currentImageIndex.value - 1
}

// Keyboard navigation for lightbox
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

const handleKeyDown = (e) => {
  if (!showLightbox.value) return

  switch (e.key) {
    case 'ArrowRight':
      nextImage()
      break
    case 'ArrowLeft':
      previousImage()
      break
    case 'Escape':
      closeLightbox()
      break
  }
}

// Modal controls
const finalRect = computed(() => ({
  width: Math.min(1600, window.innerWidth * 0.95),
  height: window.innerHeight * 0.9,
  left: Math.max(window.innerWidth * 0.025, (window.innerWidth - 1600) / 2),
  top: window.innerHeight * 0.05
}))

const currentRect = computed(() => {
  if (!props.isOpen) return props.initialRect
  return finalRect.value
})

const close = () => {
  isContentVisible.value = false
  emit('close')
}

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      isContentVisible.value = true
    }, 300)
  } else {
    isContentVisible.value = false
    showLightbox.value = false
  }
}, { immediate: true })
</script>

<style scoped>
.font-italiana {
  font-family: 'Italiana', serif;
}

.font-prata {
  font-family: 'Prata', serif;
}

.gallery-item {
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-4px);
}
</style>