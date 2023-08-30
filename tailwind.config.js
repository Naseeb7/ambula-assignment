/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleY: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        scaleX: {
          '0%': { transform: ' scaleX(0)' },
          '100%': { transform: ' scaleX(1)' },
        },
        scrollY: {
          '0%': { transform: ' translateY(0)' },
          '50%': { transform: ' translateY(-75%)' },
        },
        slideRight: {
          '0%': { transform: ' translateX(-100%)' },
          '100%': { transform: ' translateX(0)' },
        },
      },
      animation: {
        'scaleY': 'scaleY .7s ease-in-out',
        'scaleYreverse': 'scaleY .7s ease-in-out alternate-reverse',
        'scaleX': 'scaleX 1s ease-in-out',
        'scrollY': 'scrollY 4s ease-in-out infinite',
        'slideRight': 'slideRight .5s ease-in-out',
      }
    },
  },
  plugins: [],
}

