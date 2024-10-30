/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
    ],
    theme: {
        extend: {
          animation: {
            'scroll': 'scroll 30s linear infinite',
            'scroll-reverse': 'scroll-reverse 30s linear infinite',
          },
          keyframes: {
            scroll: {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(calc(-300px * 6 - 1rem * 6))' },
            },
            'scroll-reverse': {
              '0%': { transform: 'translateX(calc(-300px * 6 - 1rem * 6))' },
              '100%': { transform: 'translateX(0)' },
            },
          },
        },
      },
    }