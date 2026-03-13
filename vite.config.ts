/// <reference types="vitest" />
import { defineConfig } from "vite";
import { execSync } from "child_process";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import eslint from "vite-plugin-eslint";
import { VitePWA } from "vite-plugin-pwa";

let commitHash: string;
try {
  commitHash = execSync("git rev-parse --short HEAD").toString().trim();
} catch {
  commitHash = "unknown";
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash),
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version ?? "0.0.0"),
  },
  plugins: [
    eslint(),
    react(),
    viteTsconfigPaths(),
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
        theme_color: "#1a1b1e",
      },
      registerType: "prompt",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2}"],
      },
    }),
  ],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test-setup.ts"],
    coverage: {
      reporter: ["text", "html"],
      exclude: ["node_modules/"],
    },
  },
});
