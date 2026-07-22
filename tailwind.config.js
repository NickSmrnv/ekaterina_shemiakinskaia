/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1c211f',
        paper: '#f5f4ee',
        blue: '#2659f4',
        coral: '#ff765f',
        acid: '#c8f04b',
        mint: '#b9e5d2',
      },
      fontFamily: {
        sans: ['Inter', 'Avenir Next', 'Avenir', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Iowan Old Style', 'Baskerville', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
