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
        charcoal: '#0F172A',
        tealAccent: '#0ea5e9',
        goldAccent: '#d97706',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.08)',
        glow: '0 0 25px rgba(217, 119, 6, 0.15)',
      },
    },
  },
  plugins: [],
};
