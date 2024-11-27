/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url(/public/hero.jpg)",
      },
      fontFamily:{
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}