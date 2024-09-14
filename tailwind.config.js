/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        "container" : "1265px"
      },
      colors : {
        "primary" : "#e61f12",
        "overlay" : "rgba(0, 0, 0, 0.20)"
      },
      fontFamily : {
        "hee" : ["Heebo", "sans-serif"],
        "cau" : ["Caudex", "serif"]
      },
      backgroundImage : {
        "banner" : "url(../src/assets/banner.jpg)"
      }
    },
  },
  plugins: [],
}