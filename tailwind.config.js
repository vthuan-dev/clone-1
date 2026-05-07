/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f97316',
          red: '#e85d04',
          dark: '#0d0d0d',
          card: '#1a1a1a',
        }
      },
      fontFamily: {
        vn: ['Be Vietnam Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

