/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        footerMutedText:'#b5b5b5',
        footerMutedTextHover:'#c9c9c9',
        multiselectOptionBg:'#e5e7eba1'
      }
    },
      screens: {
        xs: '390px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
        xxxl:'1920px'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
