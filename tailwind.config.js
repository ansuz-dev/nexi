/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          30: "#123D934D",
          50: "#123D9380",
          80: "#123D93CC",
          100: "#123D93",
        },
        secondary: {
          30: "#9B27B04D",
          50: "#9B27B080",
          80: "#9B27B0CC",
          100: "#9B27B0",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
};
