const colors = require("tailwindcss/colors");

const customFonts = [
  "WorkSans-Regular",
];

module.exports = {
  purge: {
    content: ["*.html", "**/*.html"],
    options: {
      fontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      green: colors.lime,
    },
    extend: {
      fontFamily: {
        sans: customFonts,
        serif: customFonts,
        "sans-serif": customFonts,
      },
    },
  },
  variants: {
    extend: {},
  },
};
