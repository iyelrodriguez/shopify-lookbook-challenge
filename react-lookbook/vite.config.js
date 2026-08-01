import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: resolve(__dirname, "../shopify-theme/assets"),
    emptyOutDir: false,

    cssCodeSplit: true,

    rollupOptions: {
      input: resolve(__dirname, "src/main.jsx"),

      output: {
        entryFileNames: "lookbook-react.js",

        assetFileNames(assetInfo) {
          if (assetInfo.name?.endsWith(".css")) {
            return "lookbook-react.css";
          }

          return "[name][extname]";
        },
      },
    },
  },
});