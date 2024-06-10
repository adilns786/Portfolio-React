/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      alpha: '#0D0C1D',  // Example hex color
      faf3: '#12142B',
      charlie: '#161B33',
      delta: '#474973',
      eigen: '#A69CAC',
      faf: '#F1DAC4',
      faf2:'#F8EDE2',
      beta:"#FCF6F1",
      // Add more custom colors if needed
    },
  },
  },
  plugins: [],
}

