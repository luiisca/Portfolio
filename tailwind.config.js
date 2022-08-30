/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/components/GlobalStyles.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#f5f1f1",
          "light-gray": "#9f9f9f",
          "dark-gray": "#515050",
          black: "#181618",
          "light-pink": "#e4aba4",
          "light-red": "#de2f2cc9",
          "light-brown": "#bfa266",
        },
      },
      fontFamily: {
        sans: [
          "Raleway",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
};
