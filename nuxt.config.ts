export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode'
  ],

  app: {
    head: {
      title: 'Mon Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Mon portfolio professionnel' },
        { name: 'color-scheme', content: 'light dark' }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Italiana&family=Prata&display=swap',
          crossorigin: 'anonymous'
        }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  imports: {
    dirs: ['composables/**', 'utils/**']
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    dataValue: 'theme',
    storageKey: 'nuxt-color-mode'
  },

  tailwindcss: {
    config: {
      darkMode: 'class',
      content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
      ],
      theme: {
        extend: {
          fontFamily: {
            'italiana': ['Italiana', 'serif'],
            'prata': ['Prata', 'serif']
          }
        }
      }
    }
  },

  build: {
    transpile: ['three']
  },

  plugins: [
    '~/plugins/three.client.ts'
  ],

  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
      rehypePlugins: [],
      remarkPlugins: []
    }
  },

  routeRules: {
    '/projets/**': { ssr: true }
  },

  devtools: {
    enabled: true
  },

  compatibilityDate: '2024-10-25'
})