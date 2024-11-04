/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Abel-Regular', 'sans-serif'],
      },
      borderColor: {
        grey: '#F5F5F5',
      },
      backgroundColor: {
        lightGrey: '#F7F7F7',
      },
      textColor: {
        mediumGrey: '#979797',
      },
    },
  },
  plugins: [],
}
