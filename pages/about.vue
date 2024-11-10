<template>
  <main class="relative">
    <!-- Noise overlay -->
    <div 
      class="fixed inset-0 pointer-events-none z-30"
      :class="{
        'opacity-20': !isHovering,
        'opacity-30 scale-105': isHovering
      }"
    >
      <div class="absolute inset-0 bg-noise dark:invert"></div>
    </div>

    <section class="relative">
      <div 
        ref="contentWrapper" 
        class="editorial-wrapper"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      >
        <div class="editorial-content">
          <div class="max-w-3xl">
            <!-- En-tête avec effet de parallaxe -->
            <div class="mb-16">
              <h1 
                class="editorial-title text-6xl sm:text-8xl font-light text-gray-900 dark:text-white mb-4 leading-none"
                @mouseenter="handleTitleHover"
                @mouseleave="handleTitleLeave"
              >
                À propos
              </h1>

              <!-- Sous-titre rotatif -->
              <div class="h-8 overflow-hidden relative">
                <div 
                  class="transition-transform duration-500 ease-out"
                  :style="{ transform: `translateY(-${currentTitleIndex * 32}px)` }"
                >
                  <div 
                    v-for="title in titles" 
                    :key="title"
                    class="h-8 font-light text-xl text-gray-500 dark:text-gray-400"
                  >
                    {{ title }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Section Parcours avec parallaxe -->
            <div class="mb-16 space-y-12">
              <div 
                class="editorial-text text-lg text-gray-600 dark:text-gray-300 leading-relaxed transform-gpu"
                :style="{ 
                  transform: isHovering ? `translate3d(${mouseX * 0.02}px, ${mouseY * 0.02}px, 0)` : 'none'
                }"
              >
                <p class="mb-4">
                  À l'intersection du développement web et de la création audiovisuelle, je façonne des expériences numériques uniques qui allient technique et créativité.
                </p>
                <p>
                  Ma double expertise en tant que développeur et créatif me permet d'apporter une vision globale à chaque projet.
                </p>
              </div>

              <!-- Domaines d'expertise -->
              <div class="grid md:grid-cols-2 gap-8">
                <!-- Section Développement -->
                <div 
                  class="space-y-6 transform-gpu"
                  :style="{ 
                    transform: isHovering ? `translate3d(${mouseX * 0.03}px, ${mouseY * 0.03}px, 0)` : 'none'
                  }"
                >
                  <h2 class="font-light text-2xl text-gray-800 dark:text-gray-200">Développement</h2>
                  
                  <!-- Stack Technique -->
                  <div class="space-y-3">
                    <h3 class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">Stack Technique</h3>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tech in technologies" 
                        :key="tech"
                        class="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default"
                        @mouseenter="handleItemHover"
                        @mouseleave="handleItemLeave"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>

                  <!-- Services Web -->
                  <div class="space-y-3">
                    <h3 class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">Services</h3>
                    <ul class="space-y-2">
                      <li v-for="service in webServices" 
                        :key="service"
                        class="flex items-center space-x-2 group cursor-default"
                        @mouseenter="handleItemHover"
                        @mouseleave="handleItemLeave"
                      >
                        <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:scale-150 transition-transform duration-300"></span>
                        <span class="text-gray-600 dark:text-gray-300 group-hover:translate-x-1 transition-transform duration-300">{{ service }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Section Photo/Vidéo -->
                <div 
                  class="space-y-6 transform-gpu"
                  :style="{ 
                    transform: isHovering ? `translate3d(${mouseX * 0.04}px, ${mouseY * 0.04}px, 0)` : 'none'
                  }"
                >
                  <h2 class="font-light text-2xl text-gray-800 dark:text-gray-200">Photo & Vidéo</h2>
                  
                  <!-- Équipement -->
                  <div class="space-y-3">
                    <h3 class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">Équipement</h3>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="item in equipment" 
                        :key="item"
                        class="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default"
                        @mouseenter="handleItemHover"
                        @mouseleave="handleItemLeave"
                      >
                        {{ item }}
                      </span>
                    </div>
                  </div>

                  <!-- Services Audiovisuels -->
                  <div class="space-y-3">
                    <h3 class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">Services</h3>
                    <ul class="space-y-2">
                      <li v-for="service in mediaServices" 
                        :key="service"
                        class="flex items-center space-x-2 group cursor-default"
                        @mouseenter="handleItemHover"
                        @mouseleave="handleItemLeave"
                      >
                        <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:scale-150 transition-transform duration-300"></span>
                        <span class="text-gray-600 dark:text-gray-300 group-hover:translate-x-1 transition-transform duration-300">{{ service }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Compétences avec barres de progression -->
              <div class="space-y-6">
                <h2 class="font-light text-2xl text-gray-800 dark:text-gray-200">Compétences</h2>
                <div class="grid gap-6">
                  <div 
                    v-for="skill in skills" 
                    :key="skill.name"
                    class="relative group"
                    @mouseenter="() => handleSkillHover(skill)"
                    @mouseleave="handleSkillLeave"
                  >
                    <!-- En-tête de la compétence -->
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                      <span 
                        class="text-sm text-gray-500 dark:text-gray-400 tabular-nums transition-all duration-300"
                        :class="{ 'text-indigo-500': skill === hoveredSkill }"
                      >
                        {{ isAnimatingSkill(skill) ? Math.round(skillProgress[skill.name] || 0) : '0' }}%
                      </span>
                    </div>

                    <!-- Barre de progression -->
                    <div class="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <!-- Barre de progression animée -->
                      <div 
                        class="h-full rounded-full transition-all duration-1000 ease-out origin-left relative"
                        :class="[
                          skill === hoveredSkill ? 'bg-indigo-500' : 'bg-gray-700 dark:bg-gray-300',
                        ]"
                        :style="{ 
                          transform: `scaleX(${(skillProgress[skill.name] || 0) / 100})`,
                        }"
                      >
                        <!-- Effet de brillance -->
                        <div 
                          v-if="isAnimatingSkill(skill)"
                          class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25 animate-shimmer"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Liens -->
            <div class="flex space-x-8 mb-16 relative z-50">
              <NuxtLink
                to="/"
                class="editorial-button group inline-flex items-center cursor-pointer"
                @mouseenter="handleLinkHover"
                @mouseleave="handleLinkLeave"
              >
                <span class="relative">
                  Accueil
                  <span 
                    class="absolute left-0 bottom-0 w-full h-px bg-black dark:bg-white transform origin-left transition-transform duration-500"
                    :class="{ 'scale-x-100': isLinkHovered === 'home', 'scale-x-0': isLinkHovered !== 'home' }"
                  ></span>
                </span>
              </NuxtLink>

              <NuxtLink
                to="/projets"
                class="editorial-button group inline-flex items-center cursor-pointer"
                @mouseenter="handleLinkHover"
                @mouseleave="handleLinkLeave"
              >
                <span class="relative">
                  Voir mes projets
                  <span 
                    class="absolute left-0 bottom-0 w-full h-px bg-black dark:bg-white transform origin-left transition-transform duration-500"
                    :class="{ 'scale-x-100': isLinkHovered === 'projects', 'scale-x-0': isLinkHovered !== 'projects' }"
                  ></span>
                </span>
                <svg 
                  class="w-4 h-4 ml-2 transition-transform duration-500"
                  :class="{ 'translate-x-2': isLinkHovered === 'projects' }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </NuxtLink>
              
              <a 
                href="mailto:yanis.meddour27@gmail.com"
                class="editorial-button group inline-flex items-center cursor-pointer"
                @mouseenter="handleLinkHover"
                @mouseleave="handleLinkLeave"
              >
                <span class="relative">
                  Me contacter
                  <span 
                    class="absolute left-0 bottom-0 w-full h-px bg-black dark:bg-white transform origin-left transition-transform duration-500"
                    :class="{ 'scale-x-100': isLinkHovered === 'contact', 'scale-x-0': isLinkHovered !== 'contact' }"
                  ></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

// États
const contentWrapper = ref(null)
const isHovering = ref(false)
const isLinkHovered = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)
const currentTitleIndex = ref(0)
const hoveredSkill = ref(null)
const skillProgress = ref({})
const animatingSkills = ref(new Set())

// Données
const titles = [
  'Développeur Web',
  'Photographe',
  'Vidéaste',
  'Motion Designer'
]

const technologies = [
  'Vue.js',
  'Nuxt 3',
  'Tailwind CSS',
  'Three.js',
  'TypeScript',
  'Node.js',
  'GSAP',
  'WebGL'
]

const webServices = [
  "Applications web sur mesure",
  "Sites vitrines & portfolios",
  "Intégration d'expériences 3D",
  "Optimisation des performances",
  "Interfaces utilisateur modernes"
]

const equipment = [
  "Sony A7 III",
  "DJI RS3 Pro",
  "Lumix S5",
  "Atomos Ninja V",
  "DJI Mini 3 Pro"
]

const mediaServices = [
  "Photographie événementielle",
  "Vidéos promotionnelles",
  "Motion design",
  "Retouche photo",
  "Montage vidéo"
]

const skills = [
  { name: "Développement Front-end", level: 95 },
  { name: "Photographie", level: 85 },
  { name: "Montage Vidéo", level: 80 },
  { name: "UI/UX Design", level: 75 },
  { name: "Motion Design", level: 70 }
]

// Initialise les progressions à 0
skills.forEach(skill => {
  skillProgress.value[skill.name] = 0
})

// Fonction pour vérifier si une compétence est en cours d'animation
const isAnimatingSkill = (skill) => {
  return animatingSkills.value.has(skill.name)
}

// Handlers
const handleMouseMove = (event) => {
  if (!contentWrapper.value) return
  
  const rect = contentWrapper.value.getBoundingClientRect()
  mouseX.value = event.clientX - rect.left - rect.width / 2
  mouseY.value = event.clientY - rect.top - rect.height / 2
  
  isHovering.value = true

  if (contentWrapper.value) {
    contentWrapper.value.style.setProperty('--mouse-x', `${((event.clientX - rect.left) / rect.width) * 100}%`)
    contentWrapper.value.style.setProperty('--mouse-y', `${((event.clientY - rect.top) / rect.height) * 100}%`)
  }
}

const handleMouseLeave = () => {
  isHovering.value = false
  if (contentWrapper.value) {
    contentWrapper.value.style.setProperty('--mouse-x', '50%')
    contentWrapper.value.style.setProperty('--mouse-y', '50%')
  }
}

const handleTitleHover = (e) => {
  const title = e.target
  const text = title.textContent
  
  if (!title.dataset.split) {
    title.dataset.split = true
    title.innerHTML = text.split('').map(char => 
      `<span class="inline-block transform transition-all duration-300">${char}</span>`
    ).join('')
  }
  
  gsap.to(title.children, {
    duration: 0.5,
    y: -10,
    opacity: 0.7,
    scale: 1.2,
    stagger: 0.03,
    ease: 'power2.out',
    yoyo: true,
    repeat: 1
  })
}

const handleTitleLeave = () => {
  gsap.to('.editorial-title span', {
    duration: 0.3,
    y: 0,
    opacity: 1,
    scale: 1,
    ease: 'power2.out'
  })
}

const handleLinkHover = (e) => {
  const type = e.currentTarget.textContent.trim().toLowerCase()
  isLinkHovered.value = type.includes('accueil') ? 'home' :
                        type.includes('projets') ? 'projects' : 'contact'
  
  gsap.to(e.currentTarget, {
    duration: 0.4,
    y: -4,
    scale: 1.05,
    ease: 'back.out(1.7)'
  })
}

const handleLinkLeave = (e) => {
  isLinkHovered.value = null
  gsap.to(e.currentTarget, {
    duration: 0.4,
    y: 0,
    scale: 1,
    ease: 'power2.out'
  })
}

const handleItemHover = (e) => {
  gsap.to(e.currentTarget, {
    duration: 0.3,
    y: -2,
    scale: 1.05,
    ease: 'back.out(1.7)'
  })
}

const handleItemLeave = (e) => {
  gsap.to(e.currentTarget, {
    duration: 0.3,
    y: 0,
    scale: 1,
    ease: 'power2.out'
  })
}

const handleSkillHover = (skill) => {
  if (hoveredSkill.value === skill) return
  
  hoveredSkill.value = skill
  animatingSkills.value.add(skill.name)
  
  // Animation de la barre
  gsap.to(skillProgress.value, {
    [skill.name]: skill.level,
    duration: 1,
    ease: "power2.out",
    onComplete: () => {
      skillProgress.value[skill.name] = skill.level
    }
  })
}

const handleSkillLeave = () => {
  hoveredSkill.value = null
}

// Rotation des titres
const startTitleRotation = () => {
  setInterval(() => {
    currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.length
  }, 3000)
}

// Initialisation
onMounted(() => {
  startTitleRotation()
  
  // Animation initiale des éléments
  gsap.from('.editorial-content > *', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: 'power2.out'
  })
})
</script>

<style scoped>
.editorial-wrapper {
  position: relative;
  z-index: 45;
  transform-origin: center center;
  backface-visibility: hidden;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: saturate(180%) blur(20px);
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform, opacity;
  perspective: 1000px;
}

.dark .editorial-wrapper {
  background-color: rgba(17, 17, 17, 0.95);
}

.editorial-content {
  padding: 4rem;
  min-height: 100vh;
  transform-style: preserve-3d;
}

/* Animation des barres de compétences */
@keyframes shimmer {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

/* Animations de base */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.editorial-title,
.editorial-text {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.editorial-title {
  animation-delay: 0.2s;
}

.editorial-text {
  animation-delay: 0.4s;
}

/* Gradient de fond */
.editorial-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.editorial-wrapper:hover::before {
  opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .editorial-content {
    padding: 2rem;
  }
  
  .editorial-title {
    font-size: 3rem;
  }
}

/* Effet de surlignage des liens */
.editorial-button {
  position: relative;
  overflow: hidden;
}

.editorial-button::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.editorial-button:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>