/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  backgroundImage: {
      'custom-gradient': 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)'
    },
    backgroundcolor: {
      'custom-gradient': 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)'
    }},
  },
  plugins: [],
}

