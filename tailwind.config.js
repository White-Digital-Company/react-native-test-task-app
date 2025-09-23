/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightGrey: "rgba(247, 247, 247, 1)",
        grey: "rgba(157, 157, 157, 1)",
        yellow: "rgba(254, 209, 56, 1)",
      },
      fontFamily: {
        abel: ['Abel-Regular'],
      },
    },
  },
  plugins: [],
}