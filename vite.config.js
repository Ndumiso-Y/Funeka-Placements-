import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.VITE_BASE_PATH || "/";

// The production site is served from the domain root on Vercel.
export default defineConfig({
  plugins: [react()],
  base,
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.webp", "**/*.svg", "**/*.PNG", "**/*.JPG", "**/*.JPEG", "**/*.WEBP"],
});
