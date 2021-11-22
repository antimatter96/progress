const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const customFonts = ["Inconsolata"];

module.exports = {
  purge: {
    content: ["*.html", "**/*.html", "*.ts", "**/*.ts"],
    options: {
      fontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: colors.blue,
      gray: colors.gray,
      red: colors.red,
      lime: colors.lime,
      white: colors.white,
      black: colors.black,
      amber: colors.amber,
      orange: colors.orange,
      green: colors.green,
      yellow: colors.yellow,
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
    backgroundColor: ({ after }) => after(["invalid"]),
    borderColor: ({ after }) => after(["invalid"]),
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant("invalid", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`invalid${separator}${className}`)}:invalid`;
        });
      });
    }),
  ],
};
