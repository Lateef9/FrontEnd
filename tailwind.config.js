/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '10': '10px',
      },
      fontWeight: {
        '400': 400,
      },
      lineHeight: {
        'normal': 'normal',
      },
      colors: {
        'font': 'var(--font_clr, #615A5A)',
        'divcolor': 'var(--font_clr, #D9D9D9)',
      },
      height :{
        '18': "74px"
      },

    },
  },
  plugins: [],
}

