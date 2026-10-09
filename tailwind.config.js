/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#0d1017', panel: '#151a24', line: '#252c3b', accent: '#8b8fff', mint: '#5eead4' },
      fontFamily: { display: ['Sora', 'sans-serif'], body: ['"DM Sans"', 'sans-serif'] },
    },
  },
  plugins: [],
}
