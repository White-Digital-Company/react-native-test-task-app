/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBlack: 'rgba(0, 0, 0, 1)',
        mainGray: 'rgba(151, 151, 151, 1)',
        bgGray: 'rgba(247, 247, 247, 1)',
        red: 'red',
      },
      fontSize: {
        fz12: '12px',
        fz14: '14px',
        fz16: '16px',
      },
      lineHeight: {
        lh14: '14px',
        lh15: '15px',
        lh17: '17px',
        lh20: '20px',
      },
    },
  },
  plugins: [],
}
