/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        saffron: '#F4A300',
        maroon: '#E63946',
        gold: '#FFD166',
        cream: '#F7E7CE',
      },
    },
  },
  plugins: [],
};
