import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),

    viteCompression({
      algorithm: "brotliCompress",
    }),

  ],
  build: {
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
