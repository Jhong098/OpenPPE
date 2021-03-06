module.exports = {
  purge: ["./components/**/*.jsx", "./components/**/*.js", "./pages/**/*.jsx"],
  variants: {},
  plugins: [],
  theme: {
    screens: {
      md: "768px",
    },
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
      spacing: {
        leftPanelWidth: "8rem",
        navHeight: "4rem",
      },
    },
  },
};
