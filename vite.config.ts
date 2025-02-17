import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
export default defineConfig({
  root: './', // Vérifie que le root est correct
  server: {
    open: '/1.html' // Ouvre automatiquement 1.html au lieu de index.html
  }
});
