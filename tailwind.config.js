/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        card: "#1b1d22",
      },
    },
  },
  plugins: [],
};
