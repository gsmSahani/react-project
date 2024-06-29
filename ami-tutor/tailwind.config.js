/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "playWrite-mx": ["Playwrite MX", "cursive"],
        "playfair-display-sc-bold-italic": ["Playfair Display SC", "serif"],
      },
      boxShadow: {
        custom:
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      colors: {
        primary: "#fe9808",
        secondary: "#ffffff",
        dark: "#111111",
        accent: "#ecf0f1",
        text: "#2C3e50",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
