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