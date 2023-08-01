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
        'hero': "url(/static/images/hero11.jpg)",
        'hero2': "url(/static/images/hero2.jpg)",
        'hero3': "url(/static/images/hero3.jpg)",
      }
    },
  },
  plugins: [],
}