/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveDown: {
          '0%': { transform: 'translateY(-25.5%)' },
          '100%': { transform: 'translateY(25.5%)' },
        },
        moveUp: {
          '0%': { transform: 'translateY(22.5%)' },
          '100%': { transform: 'translateY(-22.5%)' },
        },
        fadeInOut: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      
      animation: {
        moveDown: 'moveDown 14s infinite alternate ease-in-out',
        moveUp: 'moveUp 14s infinite alternate ease-in-out',
        fadeInOut: 'fadeInOut 0s ease-in-out infinite',
      },
      
      fontFamily:{
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}