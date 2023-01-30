
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'greyish': '#EEEEEE',
        'pinkish': '#FF385C',
        'grey2': '#A5B0B7',
        'grey3': '#D3D3D3',
        'miniblack': '#383838',
        'minigrey': '#797979'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
