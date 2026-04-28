import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// NOTE: base: "./" keeps assets working when deployed to:
// - GitHub Pages (with HashRouter)
// - cPanel (upload /dist folder contents)
export default defineConfig({
  plugins: [react()],
  base: "/Funeka-Placements-/",
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.webp", "**/*.svg", "**/*.PNG", "**/*.JPG", "**/*.JPEG", "**/*.WEBP"],
});
