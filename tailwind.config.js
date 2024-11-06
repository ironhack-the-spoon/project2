module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        perso: ['Raleway', 'sans-serif'],
      },
      colors: {
        customGreen: '#06402b', // Add your custom color here
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