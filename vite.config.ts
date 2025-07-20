// vite.config.js
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
    minify: "esbuild",
    target: "es2020", // Better mobile compatibility
    cssMinify: true,
    cssCodeSplit: true, // Split CSS for better caching
    reportCompressedSize: false, // Faster builds
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    host: true, // allows Vite to auto-detect the host, same as '0.0.0.0' but more flexible
    port: 5000,
    allowedHosts: [
      "all",
      "19e6b561-60d5-41f5-a03a-c6e431e7f22c-00-15kr3vd6w5nau.janeway.replit.dev",
      "5e2b82b6-b90d-48d6-956f-29faebd7d5ef-00-385r4peuavxeb.kirk.replit.dev", // Added the new host here
    ],
  },
  preview: {
    host: true,
    port: 5000,
    strictPort: true,
  },
});
