/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm': {'max': '480px'},
      'xl': '1440px',
    },
    colors: {
      primary: "#111111",
      secondary: "#F5F0EC",
      accent: "#1B5B31",
      background: "#DCC1AB",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
    },
    width: {
      lg: "1440px",
    },
    padding: {
      lg: "89px",
      hero: " calc(100vw / 2 - 64px - 599px)"
    },
    fontFamily: {
      'title': ['"Montserrat",sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}

