/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        funeka: {
          dark: "#121623",    // Primary dark background / Footer
          panel: "#012E41",   // Dark panels / Overlays
          anchor: "#132D5D",  // Headings / Navbar / Section Anchors
          action: "#0E65E6",  // Primary CTA Blue / Action states
          brand: "#81BFDF",   // Light accents / Icons / Logo connector
          text: "#1F2937",    // Standard body text
          bg: "#F8FAFC",      // Site-wide background
          white: "#FFFFFF",
          divider: "#E2E8F0",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(63, 63, 63, 0.10)",
      },
      borderRadius: {
        xl2: "1rem",
      }
    },
  },
  plugins: [],
};
