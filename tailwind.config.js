/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['Lobster'] ,
        'satisfy': ['Satisfy'] 
      },
    },
  },
  plugins: [require("daisyui")],
}
