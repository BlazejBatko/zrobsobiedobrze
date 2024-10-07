const { COLORS, SIZES, PADDING } = require("./styles-const");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
      maxWidth: {
        ...SIZES,
      },
      width: {
        ...SIZES,
      },
      minWidth: {
        ...SIZES,
      },
      padding: {
        "common-padding": "1.25rem",
        ...PADDING,
      },
    },
  },
  plugins: [],
};
