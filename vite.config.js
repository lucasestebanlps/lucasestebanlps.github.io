import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/lucasestebanlps.github.io/',  // Base del repositorio
    build: {
        outDir: 'dist',                   // Carpeta de salida
        rollupOptions: {
            input: 'index.html',          // Archivo HTML principal
        }
    },
});