/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        'light-white': 'rgba(255,255,255,0.18)'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
