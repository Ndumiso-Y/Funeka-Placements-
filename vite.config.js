import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isVercel = process.env.VERCEL === "1";
const base = process.env.VITE_BASE_PATH || (isVercel ? "/" : "/Funeka-Placements-/");

// GitHub Pages serves this repo from /Funeka-Placements-/.
// Vercel serves the app from the deployment root, so it must use /.
export default defineConfig({
  plugins: [react()],
  base,
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.webp", "**/*.svg", "**/*.PNG", "**/*.JPG", "**/*.JPEG", "**/*.WEBP"],
});
