/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      lightOrange: "hsl(4, 100%, 67%)",
      darkBlue: "hsl(234, 29%, 20%)",
      lightGrayBlue: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
      darkGrayBlue: "hsl(235, 18%, 26%)",
      btnGradient:
        "linear-gradient(45deg, hsl(4, 100%, 67%), hsl(10,100%,67%))",
    },
    fontFamily: {
      sans: ["Roboto", "system-ui", "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem", // Extra small
      sm: "0.875rem", // Small
      base: "1rem", // Base
      lg: "1.25rem", // Large
      xl: "1.563rem", // Extra large (1.25 * 1.25 = 1.563)
      "2xl": "1.953rem", // 2 times extra large (1.563 * 1.25 = 1.953)
      "3xl": "2.441rem", // 3 times extra large (1.953 * 1.25 = 2.441)
      "4xl": "3.052rem", // 4 times extra large (2.441 * 1.25 = 3.052)
      "5xl": "3.815rem", // 5 times extra large (3.052 * 1.25 = 3.815)
      "6xl": "4.768rem", // 6 times extra large (3.815 * 1.25 = 4.768)
    },
    spacing: {
      2: "2px",
      5: "5px",
      10: "10px",
      15: "15px",
      20: "20px",
      35: "35px",
      50: "50px",
      75: "75px",
      100: "100px",
      125: "125px",
      150: "150px",
      200: "200px",
      // Add more spacing values as needed...
    },
    screens: {
      mid: "500px",
      lg: "850px",
    },
    extend: {},
  },
  plugins: [],
};
