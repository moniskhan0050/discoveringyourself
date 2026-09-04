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
          dark: "#0F011E",
          purple: "#2D1B4E",
          lavender: "#A78BFA",
          glow: "#D8B4FE",
          accent: "#E6E0F0",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'premium-gradient': 'radial-gradient(circle at top right, #2D1B4E, #0F011E)',
      }
    },
  },
  plugins: [],
}
