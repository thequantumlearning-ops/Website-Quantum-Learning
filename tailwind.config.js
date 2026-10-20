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
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: { DEFAULT: '#0A0D14', soft: '#111620', line: '#1E2533' },
      },
    },
  },
  plugins: [require("daisyui")],
}
