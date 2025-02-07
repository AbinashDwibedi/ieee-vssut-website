/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: [ "Ubuntu", "sans-serif"],
        mono: ["Lilita One"]
      }
      ,
      colors:{
        primary: "#293f5d",
        secondary: "#020617",
        color_1: "black",
        color_2: "white",
        // bg_c_1:"#f3f4f6",
        // bg_c_2:"#ededed",
        bg_c_1:"white",
        bg_c_2:"white"
      }
      
    },
  },
  plugins: [],
}
