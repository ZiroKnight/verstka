/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue': '#73778E',
        'gray': '#E9E9F1',
        'dark-gray': '#8C8D9D',
        'grad2-1':'#C59EDD',
        'grad1': '#CDB4DD',
        'grad2': '#7C77B8',
        'grad3': '#4AADA7',
        'white2':'#F2F2F2',
        'modal':'#ADAACA',
        'input':'#D9D9D9',
        'placeholder':'#505050',
        // 'gray': '#8492a6',
        // 'gray-light': '#d3dce6',
      },
      dropShadow: {
        '3xl': '0 5px 6px rgba(0, 0, 0, 0.25)',
      },
      fontFamily:{
        nunito: ['Nunito', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

