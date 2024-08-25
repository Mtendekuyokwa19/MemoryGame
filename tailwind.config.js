/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
// const fontSize=require("tailwindcss/")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        card: "#1b1d22",
      },
    },
    fontSize: {
      mobile: ["10px", "20px"],
      base: ["14px","20px"],
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
};
