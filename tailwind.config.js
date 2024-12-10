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
        middleGray: '#424242',
        lighterGray_2: '#e6eff5',
        lighterGray_3: '#b1b1b1',
        whiteV1: '#bdbdbd',
        whiteV2: '#bebebe',
        whiteV3: '#f4f6f9',
        activeBlue: '#2d60ff',
        darkBlue: '#343c6a',
        coolBlue: '#8ba3cb',
      },
    },
  },
  plugins: [],
};
