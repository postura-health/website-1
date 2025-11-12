/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // scans all your HTML files
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}


