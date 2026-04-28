/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        funeka: {
          brand: "#B6D0E1", // Soft supporting blue
          anchor: "#234E63", // Strong primary teal/navy
          pop: "#E59F1A", // Warm gold accent
          text: "#1F2937", // Dark gray text
          bg: "#F8FAFC", // Light background
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
