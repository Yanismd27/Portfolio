<template>
  <div>
    <!-- Overlay -->
    <div 
      v-if="isOpen"
      class="fixed inset-0 bg-black/90 backdrop-blur-lg z-[60] cursor-pointer"
      @click="close"
    />

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
                      :src="section.image"
                      :alt="section.imageAlt"
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
const props = defineProps({
  isOpen: Boolean,
  project: Object,
  initialRect: Object
})

const emit = defineEmits(['close'])
const isContentVisible = ref(false)

// Compute final dimensions
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
</style>