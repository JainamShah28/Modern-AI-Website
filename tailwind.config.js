/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif']
    },
    colors: {
      'primary': '#040C18',
      'secondary': '#052D56',
      'text-primary': '#ffffff',
      'text-secondary': '#81AFDD',
      'button-primary': '#FF4820',
      'button-primary-hover': '#991B00',
      'transparent': 'rgba(255, 255, 255, 0)'
    }
  },
  plugins: [],
}
