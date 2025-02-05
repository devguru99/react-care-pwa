import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest.json';

const VITE_BASE_PATH = '/';
// https://vitejs.dev/config/
export default defineConfig({
  base: VITE_BASE_PATH, // Set the base path to your repo name
  build: {
    outDir: 'dist', // Optional: Output directory for the production build
  },
  plugins: [
    react(),
    VitePWA({
      manifest,
      injectRegister: 'auto',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      // switch to "true" to enable sw on development
      devOptions: {
        navigateFallbackAllowlist: [/^index.html$/],
        enabled: false,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
        navigateFallback: '/index.html',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    headers: {
      'x-robots-tag': 'index, follow',
    },
  },
});
