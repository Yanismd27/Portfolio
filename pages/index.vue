<template>
  <main class="pt-16 relative">
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

    <section class="relative min-h-[400vh]">
      <!-- Editorial Section -->
      <div 
        ref="editorialWrapper" 
        class="editorial-wrapper"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      >
        <!-- Dark Mode Toggle -->
        <div class="absolute top-8 right-8 z-[1000]">
          <button 
            @click="toggleDark"
            @mouseenter="handleButtonHover"
            @mouseleave="handleButtonLeave"
            class="editorial-button group inline-flex items-center p-2 rounded-full"
            :class="{
              'bg-gray-100 dark:bg-gray-800': isButtonHovered,
              'scale-110': isButtonHovered
            }"
            aria-label="Toggle dark mode"
          >
            <span class="dark-mode-icon relative">
              <transition name="fade" mode="out-in">
                <span 
                  v-if="isDark" 
                  key="dark"
                  class="flex items-center text-yellow-500 transition-all duration-500"
                  :class="{ 'rotate-180': isButtonHovered }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
                  </svg>
                </span>
                <span 
                  v-else 
                  key="light"
                  class="flex items-center text-gray-700 dark:text-gray-300 transition-all duration-500"
                  :class="{ 'rotate-180': isButtonHovered }"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                  </svg>
                </span>
              </transition>
            </span>
          </button>
        </div>

        <div class="editorial-content">
          <div class="max-w-2xl">
            <h1 
              class="editorial-title text-6xl sm:text-8xl font-light text-gray-900 dark:text-white mb-8 leading-none"
              @mouseenter="handleTitleHover"
              @mouseleave="handleTitleLeave"
            >
              Yanis<br/>Meddour
            </h1>
            
            <div class="mb-12">
              <div class="relative overflow-hidden h-20">
                <div 
                  class="absolute w-full transition-all duration-700 ease-out"
                  :style="{ transform: `translateY(${-currentIndex * 80}px)` }"
                >
                  <div 
                    v-for="(text, index) in texts" 
                    :key="index"
                    class="h-20 flex items-center"
                  >
                    <span 
                      class="subtitle-text editorial-subtitle text-2xl text-gray-500 dark:text-gray-400 font-light tracking-wide"
                      :class="{ 'text-highlight': currentIndex === index }"
                    >
                      {{ text }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <p class="editorial-text text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-xl leading-relaxed">
              Je crée des expériences web uniques et mémorables, en combinant design et technologie.
            </p>

            <div class="flex space-x-8 mb-16 relative" style="z-index: 1000;">
              <button
                class="editorial-button group inline-flex items-center cursor-pointer relative"
                @click="scrollToProjects"
                @mouseenter="handleLinkHover"
                @mouseleave="handleLinkLeave"
                :class="{ 'hover:transform hover:translate-y-[-2px]': !isLinkHovered }"
              >
                <span class="relative">
                  Découvrir mes projets
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
              </button>

              <NuxtLink
                to="/about"
                class="editorial-button group inline-flex items-center cursor-pointer relative"
                @mouseenter="handleLinkHover"
                @mouseleave="handleLinkLeave"
                :class="{ 'hover:transform hover:translate-y-[-2px]': !isLinkHovered }"
              >
                <span class="relative">
                  À propos
                  <span 
                    class="absolute left-0 bottom-0 w-full h-px bg-black dark:bg-white transform origin-left transition-transform duration-500"
                    :class="{ 'scale-x-100': isLinkHovered === 'about', 'scale-x-0': isLinkHovered !== 'about' }"
                  ></span>
                </span>
              </NuxtLink>
              
              <NuxtLink
                to="/blog"
                class="editorial-button group inline-flex items-center cursor-pointer relative"
                @mouseenter="handleLinkHover"
                @mouseleave="handleLinkLeave"
                :class="{ 'hover:transform hover:translate-y-[-2px]': !isLinkHovered }"
              >
                <span class="relative">
                  Blog
                  <span 
                    class="absolute left-0 bottom-0 w-full h-px bg-black dark:bg-white transform origin-left transition-transform duration-500"
                    :class="{ 'scale-x-100': isLinkHovered === 'blog', 'scale-x-0': isLinkHovered !== 'blog' }"
                  ></span>
                </span>
              </NuxtLink>
              
              <a 
                href="mailto:yanis.meddour27@gmail.com"
                class="editorial-button group inline-flex items-center cursor-pointer relative"
                @mouseenter="handleLinkHover"
                @mouseleave="handleLinkLeave"
                :class="{ 'hover:transform hover:translate-y-[-2px]': !isLinkHovered }"
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
            <div class="scroll-indicator">
              <span class="editorial-caption block text-center mb-4 text-gray-400 dark:text-gray-500 tracking-widest uppercase">
                SCROLL
              </span>
              <div class="scroll-line-container">
                <div class="scroll-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Three.js container avec HoverOverlay -->
      <div 
        ref="container" 
        class="three-container"
        :class="{ 
          'blur-sm': isModalOpen,
          'pointer-events-none': isModalOpen 
        }"
        @mousemove="handleThreeContainerMouseMove"
        style="pointer-events: auto;"
      >
        <!-- Project Hover Overlay -->
        <div 
  ref="projectOverlay"
  class="project-hover-overlay"
  :class="{ 'visible': projectHovered }"
  :style="{
    transform: `translate3d(${overlayPosition.x}px, ${overlayPosition.y}px, 0)`,
  }"
>
  <h3 class="project-hover-title">{{ hoveredProjectTitle }}</h3>
  <p class="project-hover-description">{{ hoveredProjectDescription }}</p>
</div>
      </div>

      <!-- Project Modal avec transitions améliorées -->
      <transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <ProjectModal
          v-if="selectedProject && initialRect"
          :is-open="isModalOpen"
          :project="selectedProject"
          :initial-rect="initialRect"
          @close="handleModalClose"
          class="z-[1001]"
        />
      </transition>
    </section>
  </main>
</template>

<script setup>
// Imports
import { onMounted, ref, onBeforeUnmount, nextTick, watch, computed } from 'vue';
import gsap from 'gsap';
import ProjectModal from '~/components/ProjectModal.vue';
import { projects as projectsData } from '~/utils/data/projects';
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

// Dark mode avec gestion améliorée
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === 'dark');
const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

// Refs et états de base
const container = ref(null);
const editorialWrapper = ref(null);
const windowHeight = ref(0);
const scrollY = ref(0);
const currentIndex = ref(0);
const selectedProject = ref(null);
const isModalOpen = ref(false);
const textInterval = ref(null);
const selectedMesh = ref(null);
const initialRect = ref(null);
const isLocked = ref(false);

// Nouvelles refs pour l'overlay
const projectOverlay = ref(null);
const overlayPosition = ref({ x: 0, y: 0 });
const projectHovered = ref(false);
const hoveredProjectTitle = ref('');
const hoveredProjectDescription = ref('');

// États pour les micro-interactions
const isHovering = ref(false);
const isButtonHovered = ref(false);
const isLinkHovered = ref(null);
const mouseX = ref(0);
const mouseY = ref(0);
const textTransitioning = ref(false);
const lastScrollPosition = ref(0);
const scrollDirection = ref('down');
const isScrolling = ref(false);
const cursorPosition = ref({ x: 50, y: 50 });
const lastCursorPosition = ref({ x: 50, y: 50 });
const mouseVelocity = ref({ x: 0, y: 0 });

// Three.js variables
let THREE = null;
let scrollOffset = 0;
let camera, scene, renderer;
let images = [];
let autoRotationAngle = 0;
let animationFrameId = null;
let hoveredMesh = null;
let mouse = null;
let raycaster = null;
let ambientLight, directionalLight;

// Content arrays
const texts = [
  'Développeur Web',
  'Photographe / Vidéaste',
  'Créatif Passionné',
  'Problem Solver'
];

// Préparation des données des projets pour Three.js
const projects = projectsData;
const projectImages = projects.map(project => project.image);
const displayProjects = [...projects, ...projects.slice(0, 3)]; // Ajoute quelques projets en plus pour le défilement continu

// Three.js setup et fonctions
const createScene = async () => {
  if (!THREE) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(isDark.value ? 0x111111 : 0xffffff);
  
  scene.fog = new THREE.FogExp2(
    isDark.value ? 0x111111 : 0xffffff,
    0.015
  );

  ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  mouse = new THREE.Vector2(0, 0);
  raycaster = new THREE.Raycaster();
  raycaster.params.Mesh.threshold = 0.1;

  camera = new THREE.PerspectiveCamera(
    65,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  
  camera.position.set(8, -12, window.innerWidth < 768 ? 45 : 40);
  camera.lookAt(0, -15, 0);

  renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    powerPreference: "high-performance",
    alpha: true,
    stencil: false,
    depth: true
  });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.id = 'three-canvas';
  renderer.domElement.style.cursor = 'default';

  if (container.value) {
    container.value.innerHTML = '';
    container.value.appendChild(renderer.domElement);
    renderer.domElement.style.pointerEvents = 'auto';
  }
};
const createImages = async () => {
  if (!THREE || !scene) return;

  const textureLoader = new THREE.TextureLoader();
  const spiralRadius = 15;
  const heightStep = 4;
  const rotationStep = 0.8;
  const aspectRatio = 4/3;

  const defaultTextureData = new Uint8Array([128, 128, 128, 255]);
  const defaultTexture = new THREE.DataTexture(defaultTextureData, 1, 1, THREE.RGBAFormat);
  defaultTexture.needsUpdate = true;

  const loadTexture = (project, index) => {
    return new Promise((resolve) => {
      textureLoader.load(
        project.image,
        (texture) => {
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.generateMipmaps = false;
          
          const baseWidth = 8;
          const width = baseWidth - (Math.random() * 0.5);
          const height = width * aspectRatio;
          
          const geometry = new THREE.PlaneGeometry(width, height);
          const material = new THREE.MeshPhongMaterial({
            map: texture,
            transparent: true,
            opacity: 0.95,
            shininess: 50,
            fog: true,
            depthTest: true,
            depthWrite: true,
            side: THREE.DoubleSide
          });
          
          const mesh = new THREE.Mesh(geometry, material);
          
          const angle = index * rotationStep;
          const radius = spiralRadius - (index * 0.3);
          const yPos = -(index * heightStep);
          
          const randomOffsetX = (Math.random() * 0.3 - 0.15);
          const randomOffsetZ = (Math.random() * 0.3 - 0.15);
          const randomOffsetY = (Math.random() * 0.2 - 0.1);
          
          mesh.position.x = Math.sin(angle) * radius + randomOffsetX;
          mesh.position.z = Math.cos(angle) * radius + randomOffsetZ;
          mesh.position.y = yPos + randomOffsetY;
          
          const centerPoint = new THREE.Vector3(0, yPos, 0);
          mesh.lookAt(centerPoint);
          mesh.rotation.y += Math.PI;
          
          mesh.userData.originalPosition = {
            x: mesh.position.x,
            y: mesh.position.y,
            z: mesh.position.z
          };
          mesh.userData.originalRotation = mesh.rotation.clone();
          mesh.userData.projectIndex = index % projects.length;
          mesh.userData.project = projects[index % projects.length];
          
          scene.add(mesh);
          images.push({
            mesh,
            initialY: yPos,
            initialAngle: angle,
            radius: radius,
            material,
            project: projects[index % projects.length]
          });

          resolve();
        },
        undefined,
        (error) => {
          console.warn(`Error loading texture for project ${project.title}:`, error);
          resolve();
        }
      );
    });
  };

  try {
    const loadPromises = displayProjects.map((project, index) => loadTexture(project, index));
    await Promise.all(loadPromises);
  } catch (error) {
    console.error('Error creating images:', error);
  }
};

const updateSpiral = () => {
  if (!images.length) return;
  
  images.forEach(({ mesh, initialY, initialAngle, radius, material }) => {
    const newAngle = initialAngle + scrollOffset;
    const newY = initialY + scrollOffset;
    
    mesh.position.x = Math.sin(newAngle) * radius;
    mesh.position.z = Math.cos(newAngle) * radius;
    mesh.position.y = newY;
    
    const centerPoint = new THREE.Vector3(0, newY, 0);
    mesh.lookAt(centerPoint);
    mesh.rotation.y += Math.PI;
    
    const distanceFromCenter = Math.abs(newY);
    const fadeDistance = windowHeight.value * 0.5;
    material.opacity = Math.max(0.2, 1 - (distanceFromCenter / fadeDistance));
    
    // Animation de flottement améliorée
    const time = Date.now() * 0.001;
    mesh.position.y += Math.sin(time + initialAngle) * 0.05;
    mesh.rotation.z += Math.sin(time + initialAngle) * 0.001;
    
    mesh.visible = material.opacity > 0.1;
  });
};

const animate = () => {
  if (!renderer || !scene || !camera) return;

  // Animation fluide des images
  images.forEach(({ mesh }, index) => {
    const time = Date.now() * 0.001;
    const offset = index * 0.5;
    
    mesh.position.y += Math.sin(time + offset) * 0.0003;
    mesh.rotation.z += Math.sin(time + offset) * 0.0001;
  });

  renderer.render(scene, camera);
  animationFrameId = requestAnimationFrame(animate);
};

// Gestion des événements améliorée pour l'overlay au survol
const handleThreeContainerMouseMove = (event) => {
  if (!THREE || !scene || !camera || !raycaster || !mouse || !renderer || isModalOpen.value) return;

  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);

  if (renderer.domElement) {
    renderer.domElement.style.cursor = intersects.length > 0 ? 'pointer' : 'default';
  }

  if (intersects.length === 0) {
    if (hoveredMesh) {
      resetHoveredMesh();
    }
    projectHovered.value = false;
    return;
  }

  const mesh = intersects[0].object;
  if (!mesh.userData.project) return;

  if (hoveredMesh === mesh) {
    updateOverlayPosition(event);
    return;
  }

  if (hoveredMesh) {
    resetHoveredMesh();
  }

  const project = mesh.userData.project;
  hoveredProjectTitle.value = project.title;
  hoveredProjectDescription.value = project.description || '';
  
  animateMeshHover(mesh);
  showProjectOverlay(event);

  hoveredMesh = mesh;

  // Mise à jour de la position de l'overlay même pendant le mouvement
  if (projectHovered.value) {
    updateOverlayPosition(event);
  }
};

const showProjectOverlay = (event) => {
  updateOverlayPosition(event);
  projectHovered.value = true;
};

const updateOverlayPosition = (event) => {
  const padding = 20; // Distance par rapport au curseur
  overlayPosition.value = {
    x: event.clientX + padding,
    y: event.clientY - padding
  };
};

const resetHoveredMesh = () => {
  if (!hoveredMesh) return;

  if (renderer?.domElement) {
    renderer.domElement.style.cursor = 'default';
  }
  
  projectHovered.value = false;

  gsap.to(hoveredMesh.position, {
    z: hoveredMesh.userData.originalPosition.z,
    duration: 0.4,
    ease: 'power2.out',
    onComplete: () => {
      hoveredMesh = null;
    }
  });
};

const animateMeshHover = (mesh) => {
  if (renderer?.domElement) {
    renderer.domElement.style.cursor = 'pointer'; // Ajout immédiat du curseur
  }
  
  gsap.to(mesh.position, {
    z: mesh.userData.originalPosition.z + 2,
    duration: 0.4,
    ease: 'back.out(1.7)'
  });
};

const handleMouseMove = (event) => {
  if (isLocked.value || !editorialWrapper.value) return;
  
  const rect = editorialWrapper.value.getBoundingClientRect();
  const mouseX = (event.clientX - rect.left) / rect.width - 0.5;
  const mouseY = (event.clientY - rect.top) / rect.height - 0.5;

  isHovering.value = true;

  if (editorialWrapper.value) {
    editorialWrapper.value.style.setProperty('--mouse-x', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    editorialWrapper.value.style.setProperty('--mouse-y', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  }

  gsap.to('.editorial-content', {
    duration: 0.8,
    rotateX: -mouseY * 5,
    rotateY: mouseX * 5,
    translateZ: '30px',
    ease: 'power2.out'
  });

  gsap.to('.editorial-title', {
    duration: 1,
    x: mouseX * 30,
    y: mouseY * 30,
    ease: 'power2.out'
  });

  gsap.to('.editorial-subtitle', {
    duration: 1,
    x: mouseX * 20,
    y: mouseY * 20,
    ease: 'power2.out'
  });

  gsap.to('.editorial-button', {
    duration: 0.8,
    x: mouseX * 15,
    y: mouseY * 15,
    stagger: 0.05,
    ease: 'power2.out'
  });
};
const handleMouseLeave = () => {
  isHovering.value = false;

  gsap.to(['.editorial-content', '.editorial-title', '.editorial-subtitle', '.editorial-button'], {
    duration: 0.8,
    rotateX: 0,
    rotateY: 0,
    translateZ: 0,
    x: 0,
    y: 0,
    ease: 'power2.out',
    stagger: 0.05
  });

  if (hoveredMesh) {
    gsap.to(hoveredMesh.position, {
      z: hoveredMesh.userData.originalPosition.z,
      duration: 0.4,
      ease: 'power2.out',
      onComplete: () => {
        hoveredMesh = null;
        if (renderer?.domElement) {
          renderer.domElement.style.cursor = 'default';
        }
        projectHovered.value = false;
      }
    });
  }

  if (editorialWrapper.value) {
    editorialWrapper.value.style.setProperty('--mouse-x', '50%');
    editorialWrapper.value.style.setProperty('--mouse-y', '50%');
  }
};

const handleTitleHover = (e) => {
  const title = e.target;
  const text = title.textContent;
  
  if (!title.dataset.split) {
    title.dataset.split = true;
    title.innerHTML = text.split('').map(char => 
      `<span class="inline-block transform transition-all duration-300">${char}</span>`
    ).join('');
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
  });
};

const handleTitleLeave = () => {
  gsap.to('.editorial-title span', {
    duration: 0.3,
    y: 0,
    opacity: 1,
    scale: 1,
    ease: 'power2.out'
  });
};

const handleButtonHover = () => {
  isButtonHovered.value = true;
  gsap.to(".dark-mode-icon", {
    duration: 0.4,
    scale: 1.2,
    rotate: isDark.value ? 180 : 0,
    ease: 'back.out(1.7)'
  });
};

const handleButtonLeave = () => {
  isButtonHovered.value = false;
  gsap.to(".dark-mode-icon", {
    duration: 0.4,
    scale: 1,
    rotate: 0,
    ease: 'power2.out'
  });
};

const handleLinkHover = (e) => {
  const type = e.currentTarget.textContent.trim().toLowerCase();
  isLinkHovered.value = type.includes('projets') ? 'projects' :
                        type.includes('blog') ? 'blog' : 
                        type.includes('propos') ? 'about' : 'contact';
  
  gsap.to(e.currentTarget, {
    duration: 0.4,
    y: -4,
    scale: 1.05,
    ease: 'back.out(1.7)'
  });
};

const handleLinkLeave = (e) => {
  isLinkHovered.value = null;
  gsap.to(e.currentTarget, {
    duration: 0.4,
    y: 0,
    scale: 1,
    ease: 'power2.out'
  });
};

// Ajoutez cette fonction avant handleScroll
const updateEditorialStyles = () => {
  if (!editorialWrapper.value || !process.client) return;
  
  const scrollThreshold = 100;
  const fadeDistance = 300;
  
  let opacity = 1;
  let translateY = 0;
  let scale = 1;
  
  if (scrollY.value > scrollThreshold) {
    opacity = 1 - Math.min(1, (scrollY.value - scrollThreshold) / fadeDistance);
    translateY = -20 * opacity;
    scale = 1 - (0.05 * (1 - opacity));
  }
  
  gsap.to(editorialWrapper.value, {
    duration: 0.6,
    opacity: opacity,
    y: translateY,
    scale: scale,
    ease: "power2.out",
    onUpdate: () => {
      editorialWrapper.value.style.pointerEvents = opacity === 0 ? 'none' : 'auto';
    }
  });
};

const handleScroll = () => {
  if (isLocked.value) return;
  
  const currentScroll = window.scrollY;
  scrollDirection.value = currentScroll > lastScrollPosition.value ? 'down' : 'up';
  lastScrollPosition.value = currentScroll;
  
  scrollY.value = currentScroll;
  updateEditorialStyles();
  
  if (!isScrolling.value) {
    isScrolling.value = true;
    gsap.to('.scroll-line', {
      duration: 0.4,
      scaleY: 1.5,
      ease: 'power2.out'
    });
  }
  
  clearTimeout(window.scrollTimeout);
  window.scrollTimeout = setTimeout(() => {
    isScrolling.value = false;
    gsap.to('.scroll-line', {
      duration: 0.4,
      scaleY: 1,
      ease: 'power2.out'
    });
  }, 150);
  
  scrollOffset = scrollY.value * 0.002;
  updateSpiral();
};

const handleResize = () => {
  if (!camera || !renderer || !process.client) return;

  windowHeight.value = window.innerHeight;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

  const newZ = window.innerWidth < 768 ? 45 : 40;
  gsap.to(camera.position, {
    z: newZ,
    duration: 0.6,
    ease: "power2.inOut"
  });
  
  updateEditorialStyles();
};

const handleImageClick = (event) => {
  if (!THREE || !scene || !camera || !raycaster || !mouse || !renderer) return;

  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / renderer.domElement.clientWidth) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / renderer.domElement.clientHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const clickedMesh = intersects[0].object;
    const project = clickedMesh.userData.project;
    
    if (project) {
      selectedMesh.value = clickedMesh;
      
      const vector = new THREE.Vector3();
      vector.setFromMatrixPosition(clickedMesh.matrixWorld);
      vector.project(camera);
      
      const widthHalf = window.innerWidth / 2;
      const heightHalf = window.innerHeight / 2;
      
      const x = (vector.x * widthHalf) + widthHalf;
      const y = -(vector.y * heightHalf) + heightHalf;
      
      const distance = camera.position.distanceTo(clickedMesh.position);
      const size = clickedMesh.geometry.parameters.width * (camera.fov / distance) * 20;
      
      initialRect.value = {
        width: size,
        height: size * (3/4),
        left: x - (size/2),
        top: y - (size * (3/4)/2)
      };

      selectedProject.value = project;
      isModalOpen.value = true;
      toggleLocked(true);

      images.forEach(({ mesh, material }) => {
        if (mesh !== clickedMesh) {
          gsap.to(material, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut"
          });
        }
      });
    }
  }
};

const handleModalClose = () => {
  if (selectedMesh.value) {
    gsap.to(camera.position, {
      x: 8,
      y: -12,
      duration: 1,
      ease: "power2.inOut"
    });

    images.forEach(({ mesh, material }, index) => {
      if (mesh !== selectedMesh.value) {
        gsap.to(material, {
          opacity: 0.95,
          duration: 0.5,
          delay: index * 0.02,
          ease: "power2.inOut"
        });
      }
    });

    isModalOpen.value = false;
    toggleLocked(false);
    selectedMesh.value = null;
    initialRect.value = null;
    selectedProject.value = null;
  }
};

const toggleLocked = (value) => {
  isLocked.value = value;
  if (process.client) {
    if (value) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }
};

const scrollToProjects = () => {
  const targetScroll = window.innerHeight;
  
  gsap.to(window, {
    duration: 1.5,
    scrollTo: targetScroll,
    ease: "power2.inOut"
  });
};

// Lifecycle hooks
onMounted(async () => {
  if (process.client) {
    const { $THREE } = useNuxtApp();
    THREE = $THREE;
    
    windowHeight.value = window.innerHeight;
    window.scrollTo(0, 0);
    scrollY.value = 0;
    
    if (THREE) {
      try {
        await createScene();
        await nextTick();
        await createImages();
        
        nextTick(() => {
          gsap.from(camera.position, {
            z: 100,
            duration: 1.5,
            ease: "power2.out",
            onStart: () => {
              animate();
            }
          });

          window.addEventListener('click', handleImageClick, { passive: true });
          window.addEventListener('mousemove', handleMouseMove, { passive: true });
          window.addEventListener('resize', handleResize, { passive: true });
          window.addEventListener('scroll', handleScroll, { passive: true });
          
          if (container.value) {
            container.value.addEventListener('mouseleave', handleMouseLeave);
          }

          if (editorialWrapper.value) {
            editorialWrapper.value.style.setProperty('--mouse-x', '50%');
            editorialWrapper.value.style.setProperty('--mouse-y', '50%');
          }
        });

        textInterval.value = setInterval(() => {
          const currentText = document.querySelector('.subtitle-text');
          if (currentText) {
            gsap.to(currentText, {
              duration: 0.4,
              opacity: 0,
              y: -20,
              ease: 'power2.inOut',
              onComplete: () => {
                currentIndex.value = (currentIndex.value + 1) % texts.length;
                nextTick(() => {
                  const newText = document.querySelector('.subtitle-text');
                  if (newText) {
                    gsap.fromTo(newText,
                      { opacity: 0, y: 20 },
                      {
                        duration: 0.4,
                        opacity: 1,
                        y: 0,
                        delay: 0.2,
                        ease: 'power2.out'
                      }
                    );
                  }
                });
              }
            });
          }
        }, 3000);

      } catch (error) {
        console.error('Error initializing Three.js:', error);
      }
    }
  }
});

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('click', handleImageClick);
    window.removeEventListener('mousemove', handleMouseMove);
    
    if (container.value) {
      container.value.removeEventListener('mouseleave', handleMouseLeave);
    }
    
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    
    if (textInterval.value) {
      clearInterval(textInterval.value);
    }
    
    if (scene) {
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (object.material.map) object.material.map.dispose();
            object.material.dispose();
          }
        }
      });
      scene = null;
    }
    
    if (renderer) {
      renderer.dispose();
      renderer.forceContextLoss();
      renderer = null;
    }
    
    images = [];
    hoveredMesh = null;
    selectedMesh.value = null;
    
    if (isLocked.value) {
      toggleLocked(false);
    }
  }
});

// Watchers
watch(isDark, (newValue) => {
  if (scene) {
    const targetColor = newValue ? 0x111111 : 0xffffff;
    
    gsap.to(scene.background, {
      r: newValue ? 0.067 : 1,
      g: newValue ? 0.067 : 1,
      b: newValue ? 0.067 : 1,
      duration: 0.6,
      ease: "power2.inOut",
      onUpdate: () => {
        if (scene.fog) {
          scene.fog.color.copy(scene.background);
        }
      }
    });

    images.forEach(({ material }) => {
      gsap.to(material, {
        duration: 0.6,
        opacity: material.opacity * 0.95,
        ease: "power2.inOut"
      });
    });
  }
});

watch(currentIndex, (newIndex, oldIndex) => {
  textTransitioning.value = true;
  gsap.to('.subtitle-text', {
    duration: 0.4,
    opacity: 0,
    y: -20,
    ease: 'power2.inOut',
    onComplete: () => {
      nextTick(() => {
        gsap.to('.subtitle-text', {
          duration: 0.4,
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          onComplete: () => {
            textTransitioning.value = false;
          }
        });
      });
    }
  });
});

watch(isModalOpen, (newValue) => {
  if (newValue) {
    gsap.to(camera.position, {
      z: camera.position.z + 5,
      duration: 0.6,
      ease: "power2.inOut"
    });
  } else {
    gsap.to(camera.position, {
      z: window.innerWidth < 768 ? 45 : 40,
      duration: 0.6,
      ease: "power2.inOut"
    });
  }
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Italiana&family=Prata&display=swap');
.project-hover-overlay {
  position: fixed;
  pointer-events: none;
  z-index: 1000;
  transform-origin: top left;
  visibility: hidden; /* Ajouté */
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  padding: 12px 16px;
  border-radius: 8px;
  min-width: 200px;
  max-width: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease; /* Modifié */
}

.project-hover-overlay.visible {
  visibility: visible;
  opacity: 1;
}

.project-hover-content {
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px 16px;
  min-width: 200px;
  max-width: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.dark .project-hover-content {
  background: rgba(255, 255, 255, 0.85);
  border-color: rgba(0, 0, 0, 0.1);
}

.project-hover-title {
  font-family: 'Prata', serif;
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin-bottom: 4px;
}

.project-hover-description {
  font-family: 'Prata', serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
}

.dark .project-hover-title {
  color: black;
}

.dark .project-hover-description {
  color: rgba(0, 0, 0, 0.8);
}


/* Base Layout */
.editorial-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 45;
  transform-origin: center center;
  backface-visibility: hidden;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: saturate(180%) blur(20px);
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform, opacity;
  perspective: 1000px;
  pointer-events: auto !important;
  transform: none !important;
}

/* Gradient Animation */
.editorial-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(
    800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.1),
    transparent 40%
  );
  pointer-events: none;
}

.dark .editorial-wrapper::before {
  background: radial-gradient(
    800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.05),
    transparent 40%
  );
}

.editorial-wrapper:hover::before {
  opacity: 1;
}

.dark .editorial-wrapper {
  background-color: rgba(17, 17, 17, 0.95);
}

.editorial-content {
  padding: 4rem;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  pointer-events: all !important;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  position: relative;
  z-index: 100;
  transform: none !important;
}

/* Three.js Container */
.three-container {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 100vh !important;
  z-index: 1 !important;
  perspective: 1000px;
  pointer-events: none !important;
}

#three-canvas {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  pointer-events: auto !important;
  touch-action: none;
  transition: filter 0.2s cubic-bezier(0.19, 1, 0.22, 1);
}

/* Typography */
.editorial-title {
  font-family: 'Italiana', serif;
  letter-spacing: -0.02em;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 0.2s;
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  cursor: default;
  position: relative;
  z-index: 60;
}

.editorial-title span {
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1),
              opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform, opacity;
}

.editorial-subtitle {
  font-family: 'Prata', serif;
  letter-spacing: 0.04em;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 0.4s;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform, opacity;
  position: relative;
  z-index: 60;
}

.editorial-text {
  font-family: 'Prata', serif;
  font-weight: 300;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 0.6s;
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  position: relative;
  z-index: 60;
}

/* Button Styles */
.editorial-button {
  font-family: 'Prata', serif;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  @apply text-gray-900 dark:text-gray-100;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 1;
  position: relative;
  z-index: 9999 !important;
  cursor: pointer !important;
  pointer-events: all !important;
}

.editorial-button:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 0;
  background: currentColor;
  opacity: 0.1;
  transform: translateY(-50%);
  transition: height 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.editorial-button:hover:before {
  height: 100%;
}

/* Scroll Indicator */
.scroll-indicator {
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  pointer-events: auto;
  animation: fadeIn 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 1s;
  position: relative;
  z-index: 60;
}

.scroll-line-container {
  width: 1px;
  height: 64px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.scroll-line {
  position: absolute;
  width: 1px;
  height: 100%;
  @apply bg-gray-400 dark:bg-gray-600;
  animation: scrollPulse 2.5s cubic-bezier(0.19, 1, 0.22, 1) infinite;
  transform-origin: top center;
}

/* Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    filter: blur(4px);
  }
  100% {
    opacity: 0.8;
    filter: blur(0);
  }
}

@keyframes scrollPulse {
  0% {
    transform: scaleY(0);
    transform-origin: top center;
    opacity: 0;
  }
  25% {
    transform: scaleY(1);
    transform-origin: top center;
    opacity: 1;
  }
  25.1% {
    transform-origin: bottom center;
  }
  50% {
    transform: scaleY(0);
    transform-origin: bottom center;
    opacity: 0;
  }
  50.1% {
    transform-origin: top center;
  }
  75% {
    transform: scaleY(1);
    transform-origin: top center;
    opacity: 1;
  }
  75.1% {
    transform-origin: bottom center;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom center;
    opacity: 0;
  }
}

/* Media Queries */
@media (max-width: 768px) {
  .editorial-content {
    padding: 2rem;
  }
  
  .editorial-title {
    font-size: 3rem;
  }
  
  .editorial-subtitle {
    font-size: 1.5rem;
  }
  
  .editorial-text {
    font-size: 1rem;
  }

  .scroll-indicator {
    margin-top: 1.5rem;
  }

  .scroll-line-container {
    height: 48px;
  }

  .editorial-button {
    font-size: 0.875rem;
  }

  .editorial-wrapper::before {
    background: radial-gradient(
      400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 255, 255, 0.1),
      transparent 40%
    );
  }

  .project-hover-overlay {
    display: none;
  }
}

@media (max-width: 640px) {
  .editorial-content {
    padding: 1.5rem;
  }

  .editorial-title {
    font-size: 2.5rem;
  }

  .editorial-subtitle {
    font-size: 1.25rem;
  }

  .scroll-line-container {
    height: 40px;
  }
}

/* Utility Classes */
.perspective {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.will-change-transform {
  will-change: transform;
}

.transition-medium {
  transition-duration: 300ms;
}

.transition-slow {
  transition-duration: 500ms;
}

.ease-custom {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}


</style>