/** @type {import('tailwindcss').Config} */
module.exports = {


  content: ["./src/**/*.{html,js}"],

  darkMode: 'selector',

  theme: {

    extend: {
      //custom font
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif']
      },

      width:{
        'custom-W1': '48rem',
        'sm-custom-W2': '40rem',
      },

      colors: {

        //LIGHT THEME
        
        light_primaryBG:'#f1f5f9', //for html main body
        light_secondaryBG: '#e5e7eb', //for input fields and button backgrounds

        light_primaryFG: '#FFFFFF', //for navbar and other posts
        light_secondaryFG: '', //for navbar and other posts
        
        light_primary_hover: '#e5e7eb',
        light_secondary_hover: '#d1d5db',
        
        light_primarytxt: '#000000', // black color
        light_secondarytxt: '#4b5563',// low opacity text

        lightborder: '#FFFFFF',
        lightplaceholder: '#f3f4f6',
        lightfill: '#FFFFFF',
       

        //DARK THEME
        
        dark_primaryBG: '#18191A', //for html main body
        dark_secondaryBG: '#3A3B3C', //for input fields and button backgrounds

        dark_primaryFG: '#242526', //for navbar and other posts
        dark_secondaryFG: '', //for navbar and other posts
        
        dark_primary_hover: '#3A3B3C',
        dark_secondary_hover: '#5b5b5b',
        
        dark_primarytxt: '#E4E6EB',
        dark_secondarytxt: '#9ca3af',

        darkborder: '#3A3B3C',
        darkplaceholder: '#B0B3B8',
        darkfill: '#FFFFFF',
      }

    },
    plugins: [],
  }

}
