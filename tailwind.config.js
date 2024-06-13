/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        azonix: ['Azonix', 'sans-serif'],
      },
      colors: {
        'gradient-start': '#667eea',
        'gradient-end': '#764ba2',
      },
    },
  },
  plugins: [],
};
