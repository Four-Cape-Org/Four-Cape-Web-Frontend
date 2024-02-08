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
        expandVertical: "expandVertical 1s ease-in-out forwards",
        shrinkVertical: "shrinkVertical 1s ease-in-out forwards"
      },
      keyframes:{
        expandVertical: {
          '0%': {
            height: "0px",
            overflowY: "hidden"
          },
          '100%': {
            height: "100vh",
            overflowY: "none"
          }
        },
        shrinkVertical: {
          '0%': {
            height: "100vh",
            overflowY: "none"
          },
          '1%': {
            overflowY: 'hidden'
          },
          '100%': {
            height: '0%',
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
    },
  },
  plugins: [],
}