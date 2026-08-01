import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],

  build: {
    outDir: resolve(__dirname, "../shopify-theme/assets"),
    emptyOutDir: false,

    rollupOptions: {
      output: {
        entryFileNames: "lookbook-react.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "lookbook-react.css";
          }

          return "[name][extname]";
        },
      },
    },
  },
});