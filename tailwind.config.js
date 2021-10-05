module.exports = {
  purge: {
    content: ["./pages/**/*.js", "./components/**/*.js"],
  },
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
