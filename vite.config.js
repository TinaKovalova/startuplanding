import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import VitePluginWebpAndPath from "vite-plugin-webp-and-path";


// const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // base:"//",
  plugins: [
    injectHTML(), VitePluginWebpAndPath()],
});



