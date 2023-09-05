/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        blue: "#448FA3",
        lightBlue: "#68C5DB",
        purple: "#525174",
        green: "#9ECE9A",
        white: "#f1f1f1",
      },
    },
    variants: {
      extend: {
        display: ["group-hover"],
      },
    },
  },
  plugins: [],
};
