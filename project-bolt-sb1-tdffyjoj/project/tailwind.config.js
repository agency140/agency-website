/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9e0fe',
          300: '#7cc5fd',
          400: '#36a7fa',
          500: '#0c8def',
          600: '#006fcb',
          700: '#0058a3',
          800: '#004b86',
          900: '#003f70',
          950: '#002951',
        },
        accent: {
          50: '#fdf3ff',
          100: '#fae5ff',
          200: '#f5ccff',
          300: '#efa3ff',
          400: '#e669ff',
          500: '#d633ff',
          600: '#c011ff',
          700: '#a700ef',
          800: '#8a00c2',
          900: '#73009f',
          950: '#4a006b',
        },
      },
    },
  },
  plugins: [],
};