import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    host: true, // allows Vite to auto-detect the host, same as '0.0.0.0' but more flexible
    port: 5000,
    allowedHosts: [
      "all",
      "19e6b561-60d5-41f5-a03a-c6e431e7f22c-00-15kr3vd6w5nau.janeway.replit.dev",
    ],
  },
  preview: {
    host: true,
    port: 5000,
    strictPort: true,
  },
});
