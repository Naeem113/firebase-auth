/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#134E4A',
        secondary:'#0D9488',
        lightSecondary:'#A2F4F0',
        danger: '#F45A4F',
        warning: 'orange',
        info: '#60A5FA',
        link:'#4560CB',
        tprimary:'black',
        tsecondary:'#334155'
      }
    },
  },
  plugins: [],
}

