/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        textSecondary: '#979797',
        divider: '#F5F5F5',
        grayBg: '#F7F7F7',
      },
      fontFamily: {
        main: ['Abel-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
