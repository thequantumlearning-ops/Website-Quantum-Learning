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
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Softer than pure white and pure black so long reading is easier on the eyes.
        white: '#EEF1F6',
        ink: { DEFAULT: '#0F1422', soft: '#161D2D', raised: '#1B2335', line: '#262F42' },
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(0, 0, 0, 0.45)',
      },
      letterSpacing: {
        tightish: '-0.02em',
      },
    },
  },
  plugins: [require("daisyui")],
}
