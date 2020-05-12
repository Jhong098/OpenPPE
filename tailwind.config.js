module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#607D8B',
        dark_primary: '#455A64',
        light_primary: '#CFD8DC',
        primary_text: '#F6F6F6'
      }
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [],
  theme: {
    extend: {
      colors: {
        dark_primary: "#455A64",
        light_primary: "#CFD8DC",
        primary: "#607D8B",
        accent: "#FFEB3B",
        divider: "#BDBDBD",
        text_white: "#F6F6F6",
        text_black: "#212121",
      },
    },
  },
};
