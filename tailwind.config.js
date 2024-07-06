/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#59D53B',
        'bg': '#343640',
      },
      fontFamily: {
        default: ['"Roboto"'],
      }
    },
  },
  plugins: [],
}

