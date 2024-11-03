/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: 'Abel-Regular',
      },
      textColor: {
        textSecondary: '#979797',
      },
      borderColor: {
        divider: '#F5F5F5',
      },
      backgroundColor: {
        grayBg: '#F7F7F7',
      },
    },
  },
  plugins: [],
};
