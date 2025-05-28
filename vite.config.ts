import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  envPrefix: 'VITE_',
  build: {
    outDir: 'dist',
  },
  base: '/',
  server: {
    host: "192.168.254.212",
    port: 8082,
    proxy: {
      '/api': {
        target: "http://192.168.254.211:8080",
        changeOrigin: true
      }
    }
  },
  preview: {
    port: 3001,
  },
});
