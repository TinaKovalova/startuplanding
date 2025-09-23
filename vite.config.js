import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import VitePluginWebpAndPath from "vite-plugin-webp-and-path";

export default defineConfig({
  base: "/startuplanding/",
  plugins: [injectHTML(), VitePluginWebpAndPath()],
});



