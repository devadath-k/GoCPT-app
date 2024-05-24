/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        padyakke: [ "Padyakke Expanded One", "serif"],
        jura: ["Jura", "sans-serif"],
        offside: ["Offside", "sans-serif"]
      },
      backgroundImage: {
        'gradient-home': 
            'linear-gradient(246.28deg, #F197F4 -27.32%, #5B6AAA 86.32%)',
        'gradient-button1': 'linear-gradient(180deg, #2B3A6399 0%, #B382D399 100%)',
        'gradient-button2': 'linear-gradient(180deg, #B382D399 0%, #2B3A6399 100%)',
        'footer' : 'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 99.99%, rgba(0, 0, 0, 0) 100%)',
        
        // You can add more custom classes here
      },
      boxShadow: {
        'button' : '0px 0px 20px rgba(0, 0, 0, 0.4)',
        'featureBox' : '0px 0px 100px 0px #00000033' ,
        'cardShadow' : '0px 0px 25px 0px #00000040',
        'aboutButton' : '0px 0px 50px 0px #FFFFFF99',
        'contribute' : '0px 5px 60px 0px #00000080',
        'contact' : '0px 0px 50px 0px #000000A6',
        'footer' : '0px 4px 4px 0px #00000040',
        'login' : '0px 0px 45px 0px #000000A6',
        'navbar': '0px 0px 30px 0px #000000E3',
        'dashCard': '0px 0px 10px 0px #00000080',

      },
      dropShadow: {
        'logo': '0px 4px 15px rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}

