/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      dancin: ['Dancing Script', 'cursive'],
      rubik: ['Dancing Script', 'cursive']
    },
    extend: {
      backgroundImage: {
        'iceland-spar': "url('/src/assets/Iceland_Spar.png')"
      }
    },
  },
  plugins: [],
}