import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,              // You can change this if needed
    open: true,              // Auto-open browser on dev start
  },
  build: {
    target: 'esnext',        // Matches tsconfig target
    outDir: 'dist',
    sourcemap: true,         // Helpful for debugging production builds
    rollupOptions: {
      output: {
        manualChunks: undefined, // Let Vite optimize automatically
      },
    },
  },
})
