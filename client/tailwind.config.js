/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueTheme: {
          DEFAULT: '#2A4272',
        },
        pinkTheme: {
          DEFAULT: '#DC94AC',
        }
      }
    },
  },
  plugins: [],
}

