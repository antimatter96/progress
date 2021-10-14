const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: [
      '*.html',
      '**/*.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      green: colors.lime,
    },
    fontFamily: {
      'display': ['Oswald'],
      'body': ['"Open Sans"']
    },
    extend: {},
  },
  variants: {
    extend: {},
  }
};
