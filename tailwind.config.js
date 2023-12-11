/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [

    // this is a custom utility for letter spacing 
    function ({ addUtilities }) {
      const newUtilities = {};

      for (let i = 1; i <= 100; i++) {
        newUtilities[`.tracking-${i}`] = { 'letter-spacing': `${i / 100}em` };
      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}