/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'shadows-into-light':['Shadows Into Light','sans-serif']
      }
    },
  },
  plugins: [],
}
