/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        Neutral: {
          10: '#F5F5F5',
          15: '#F5F5F5',
          75: '#979797',
          100: '#000000',
        },
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
      },
      fontFamily: {
        abel: ['Abel-Regular', 'Abel', 'sans-serif'],
        'sf-pro': [
          'SF-Pro-Display-Regular',
          'SF Pro Display',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
