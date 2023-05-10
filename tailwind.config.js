const { nextui } = require("@nextui-org/theme/plugin");
// const { commonColors } = require("@nextui-org/theme/colors");

// get tailwindcss default config
// const defaultConfig = require("tailwindcss/defaultConfig");
// const twColors = require("tailwindcss/colors.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {},
        dark: {},
      },
    }),
  ],
};