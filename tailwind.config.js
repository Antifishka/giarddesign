/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '480px',
      'lg': '1440px',
    },
    colors: {
      primary: "#111111",
      accent: "#1B5B31",
    },
    width: {
      lg: "1440px",
    },
    padding: {
      lg: "89px",
    },
    extend: {
    },
  },
  plugins: [],
}

