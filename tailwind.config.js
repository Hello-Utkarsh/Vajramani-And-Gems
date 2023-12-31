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
        'hero': "url(/static/images/hero.jpg)",
        'earings': "url(/static/images/earings.png)",
        'necklace': "url(/static/images/necklace.png)",
        'bracelet': "url(/static/images/bracelet.png)",
        'ring': "url(/static/images/rings.png)",
      }
    },
  },
  plugins: [],
}