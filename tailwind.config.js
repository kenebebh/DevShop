/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#42FF00",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#0b0d25",
        "black-200": "#000218",
        "white-100": "#f3f3f3",
      },
      screens: {
        xs: "200px",
      },
    },
  },
  plugins: [],
};
