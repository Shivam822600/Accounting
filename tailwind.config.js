/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#092c4c',
        ink: '#102235',
        gold: '#e0b454',
        mint: '#e8f4ee',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(9, 44, 76, 0.12)',
      },
    },
  },
  plugins: [],
};
