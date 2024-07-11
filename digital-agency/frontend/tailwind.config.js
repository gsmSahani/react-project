/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      color: {
        primary: "#6153CD",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1 rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
