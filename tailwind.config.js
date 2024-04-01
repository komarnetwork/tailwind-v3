/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        warnaku: "#bada55",
      },
    },
  },
  plugins: [],
};
