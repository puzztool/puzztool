/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import eslint from 'vite-plugin-eslint'
import { VitePWA } from "vite-plugin-pwa";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
  plugins: [
    eslint(),
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    VitePWA({
      filename: "service-worker.js",
      manifest: {
        icons: [
          {
            src: "icons-64-fill.png",
            sizes: "64x64",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons-192-fill.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons-512-fill.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        name: "PuzzTool",
        short_name: "PuzzTool",
      },
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
      ],
    },
  },
});
