/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubrik: ['"ICA Rubrik"', 'sans-serif'],
        signature: ['"Great Vibes"', 'cursive'],
        signature: ['"Dancing Script"', 'cursive'],
        sans: ['Outfit', 'sans-serif'],
      },
        animation: {
        'spin-slow': 'spin 20s linear infinite',
        pulse: 'pulse 5s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}