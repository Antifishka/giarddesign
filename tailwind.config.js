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
    },
    width: {
      lg: "1440px",
    },
    padding: {
      lg: "89px",
    },
    fontFamily: {
      'title': ['"Montserrat",sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}

