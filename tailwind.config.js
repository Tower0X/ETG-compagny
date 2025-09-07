/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5E20',
          light: '#4CAF50',
          bg: '#E8F5E8'
        },
        charcoal: '#424242',
        'gray-light': '#F5F5F5'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
};