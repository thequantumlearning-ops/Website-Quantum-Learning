/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        '4xl': '4rem', // overriding default size
      },
    },
  },
  plugins: [require("daisyui")],
}
