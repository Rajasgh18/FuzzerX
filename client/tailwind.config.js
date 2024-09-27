/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        '.red-bullet li::marker': {
          color: 'red',
        },
        '.blue-bullet li::marker': {
          color: 'blue',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
