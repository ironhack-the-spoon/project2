/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#00582B",
        green: {
          600: "#00582B",
          700: "#004A24",
        },
        beige: {
          light: "#faf2ea",
        },
      },
    },
  },
  plugins: [],
};
