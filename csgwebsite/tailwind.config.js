/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      firacode: ["Fira Code", "monospace"],
    },
    extend: {
      colors: {
        logopurple: "#663072",
        buttonpurple: "#C59ED1",
        bggray: "#EDEDED",
      },
    },
  },
  plugins: [],
};
