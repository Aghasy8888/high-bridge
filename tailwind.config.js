/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/src/assets/bg-img.svg')",
        overlay: "url('/src/assets/bg-overlay.svg')",
      },
      fontFamily: {
        zen: ['"Zen Kaku Gothic Antique"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        darkGray: '#212121',
        lighterGray: '#e0e0e0',
        middleGray: '#424242'
      },
    },
  },
  plugins: [],
};
