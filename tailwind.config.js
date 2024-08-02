/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        abel: ['Abel-Regular', 'sans-serif'],
      },
      height: {
        34: '139px',
      },
      borderRadius: {
        default: '20px',
      },
      colors: {
        alabaster: '#F7F7F7',
        'dusty-gray': '#979797',
      },
    },
  },
  plugins: [],
}
