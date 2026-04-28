/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        funeka: {
          charcoal: "#1A1A1A",
          deepBlue: "#0F172A", // Rich slate-900
          vibrantBlue: "#2563EB", // Vibrant blue-600
          electricBlue: "#3B82F6", // Bright blue-500
          softBlue: "#E0F2FE", // Sky-100
          midGrey: "#4B5563", // Slate-600
          white: "#FFFFFF",
          lightBlueTint: "#F8FAFC", // Slate-50
          blueHover: "#EFF6FF", // Blue-50
          dividerGrey: "#E2E8F0", // Slate-200
          darkGreyHover: "#334155", // Slate-700
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
