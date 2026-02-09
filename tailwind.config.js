/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        funeka: {
          charcoal: "#3F3F3F",
          softBlue: "#BFD8E6",
          midGrey: "#8E8E8E",
          white: "#FFFFFF",
          lightBlueTint: "#EAF3F8",
          blueHover: "#A8C7D8",
          dividerGrey: "#DADADA",
          darkGreyHover: "#2F2F2F",
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
