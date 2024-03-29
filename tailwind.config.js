/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['EB Garamond', 'serif'],
      },
      animation:{
        expandVertical: "expandVertical .3s ease-in-out forwards",
        shrinkVertical: "shrinkVertical .3s ease-in-out forwards"
      },
      keyframes:{
        expandVertical: {
          '0%': {
            height: "0px",
            overflowY: "hidden"
          },
          '100%': {
            height: "300px",
            overflowY: "auto"
          }
        },
        shrinkVertical: {
          '0%': {
            height: "300px",
            overflowY: "auto"
          },
          '1%': {
            overflowY: 'hidden'
          },
          '100%': {
            height: '0px',
            overflowY: 'hidden'
          }
        }
      }
    },
    colors: {
      'bg-color': '#262626',
      'primary-color': '#F2F2F2',
      'secondary-color': '#1D1D1D',
      'accent-color': '#F82586',
      'accent-hover': '#d45d95',
      'red' : 'rgba(248, 37, 134, 1)',
      'text-color': 'rgba(147, 147, 147, 1)',
      'black': 'rgba(31, 31, 31, 1)',
    },
  },
  plugins: [],
}