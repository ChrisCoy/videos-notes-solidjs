import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";

const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "static");

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  publicDir: publicDir,
  build: {
    outDir: outDir,
    minify: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        script: resolve(__dirname, "src", "index.tsx"),
      },
      output: {
        entryFileNames: (chunk) => `${chunk.name}.js`,
        assetFileNames: `style.css`,
      },
    },
  },
});
