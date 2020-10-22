module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js", "./features/**/*.js"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#E5E5E5",
        primaryDark: "#14213D",
        secondary: {
          100: "#FCA311",
          200: "#e2e2d5",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
      inset: {
        "-45": "-45px",
      },
    },
  },
  variants: {},
  plugins: [],
};
