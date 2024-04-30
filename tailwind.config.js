/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gray-color': '#B9B9B9',
        'green-color': '#42D02B',
      },

      fontFamily: {
        'poppins': ['Poppins' , 'sans-serif']
      }
    },
  },
  plugins: [],
}

