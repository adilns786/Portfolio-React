/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      alpha01:"#07060F",  
      alpha: '#0D0C1D',  // Example hex color
      beta: '#12142B',
      charlie: '#161B33',
      delta: '#474973',
      eigen: '#A69CAC',
      faf: '#F1DAC4',
      faf2:'#F8EDE2',
      faf3:"#FCF6F1",
      // Add more custom colors if needed
    },
    fontFamily: {
      playwrite: ['"Playwrite FR Moderne"', 'sans-serif'],
      tiny5: ['Tiny5', 'sans-serif'],

      shadow:['"Shadows Into Light"','sans-serif'],
      adlam:['"ADLaM Display"','sans-serif'],

    },
  },
  },
  plugins: [],
}

