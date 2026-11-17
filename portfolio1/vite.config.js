import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('node_modules/motion') ||
            id.includes('node_modules/gsap') ||
            id.includes('node_modules/@gsap') ||
            id.includes('node_modules/lenis')
          ) {
            return 'vendor-motion'
          }
          if (
            id.includes('node_modules/lucide-react') ||
            id.includes('node_modules/embla-carousel') ||
            id.includes('node_modules/cmdk')
          ) {
            return 'vendor-ui'
          }
          return undefined
        },
      },
    },
  },
})
