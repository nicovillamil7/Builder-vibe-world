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
    minify: 'esbuild',
    target: 'esnext',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
      external: (id) => {
        // Externalize large dependencies for mobile
        return id.includes('node_modules') && (
          id.includes('lodash') || 
          id.includes('moment') ||
          id.includes('date-fns')
        );
      }
    },
    chunkSizeWarningLimit: 1000,
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
