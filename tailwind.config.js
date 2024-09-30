/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src",
    "./src/**.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hotPink: "rgb(221,0,255)",
        darkPink: "rgb(107,9,122)",
        turquoise: "rgb(0,255,251)",
      },
    },
  },
  plugins: [],
};
