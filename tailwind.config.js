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
        'bg-parent': '#4A4D5E',
      },
      fontFamily: {
        'sans': ['Roboto'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

