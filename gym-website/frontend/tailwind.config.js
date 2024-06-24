/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#fe9808",
        dark: "#111111",
      },
      container: {
        center: true,
        DEFAULT: "1 rem",
        sm: "2rem",
      },
    },
  },
  plugins: [],
};
