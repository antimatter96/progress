const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin');

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
    backgroundColor: ({after}) => after(['invalid']),
    borderColor: ({after}) => after(['invalid'])

  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('invalid', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`invalid${separator}${className}`)}:invalid`
        })
      })
    })
  ]
};
