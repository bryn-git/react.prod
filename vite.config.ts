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
    host: "0.0.0.0",
    port: 8082,
    proxy: {
      '/api': {
        target: "http://localhost:8080",
        changeOrigin: true
      }
    }
  },
  preview: {
    port: 3001,
  },
});
