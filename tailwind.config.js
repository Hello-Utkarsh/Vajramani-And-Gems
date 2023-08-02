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
        'colage-1': "url(/static/images/colage-1.png)",
        'colage-2': "url(/static/images/colage-2.jpg)",
        'earings': "url(/static/images/earings.png)",
        'necklace': "url(/static/images/necklace.png)",
        'bracelet': "url(/static/images/bracelet.png)",
        'ring': "url(/static/images/rings.png)",
      }
    },
  },
  plugins: [],
}