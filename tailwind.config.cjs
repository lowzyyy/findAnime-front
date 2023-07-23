/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "450px",
      ...defaultTheme.screens,
    },
    backgroundPosition: {},
    backgroundSize: { "400%": "400%", ...defaultTheme.backgroundSize },
    extend: {
      fontFamily: {
        sans: ["Rubik Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
