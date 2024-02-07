/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{html,jsx,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1680px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["BioSans", "sans-serif"],
      termina: ["Termina"],
    },
    extend: {
      letterSpacing: {
        10: "0.1em",
        20: "0.2em",
      },
      backgroundImage: {
        "primary-secondary":
          "linear-gradient(225deg, #5834FF 9.35%, #C260FE 88.41%)",
        "primary-secondary-dark":
          "linear-gradient(225deg, #4929DC 9.35%, #A247DB 88.41%)",
      },
      colors: {
        danger: "#e25a71",
        success: "#5AE278",
        warning: "#FFD23F",
        primary: {
          300: "#8A71FF",
          400: "#7051FF",
          500: "#5834FF",
          600: "#4929DC",
          700: "#391DBA",
        },
        secondary: {
          300: "#D490FE",
          400: "#CB78FF",
          500: "#C260FE",
          600: "#A247DB",
          700: "#822DB7",
        },
        tertiary: {
          300: "#EFAAB0",
          400: "#EC979F",
          500: "#E8858E",
          600: "#CD6A73",
          700: "#B14F58",
        },
        neutral: {
          50: "#F2F3FB",
          100: "#E5E6F5",
          200: "#DBDCF0",
          300: "#D1D1EA",
          400: "#8F91AE",
          500: "#555979",
          600: "#23253B",
          700: "#121325",
          800: "#0B0B19",
          900: "#050506",
        },
      },
    },
  },
  plugins: [],
}
