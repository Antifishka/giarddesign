/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}", "!./**/node_modules/**"],
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
    },
    fontFamily: {
      'title': ['"Montserrat", sans-serif'],
      'body': ['"Inter", system-ui, sans-serif'],
    },
    extend: {
      keyframes: {
        fadeLeft: {
          '0%': { transform: 'translateX(-250px)', opacity: 0},
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        swing: {
          '0%': { transform: 'rotate(6deg)' },
          '4%': { transform: 'rotate(-6deg)' },
          '8%': { transform: 'rotate(3deg)' },
          '12%': { transform: 'rotate(-3deg)' },
          '16%': { transform: 'rotate(0)' },
        }
      }
    },
  },
  plugins: [],
}

