/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/hero-bg.svg')",
        "hero-small": "url('/assets/images/hero.svg')",
        "image-layer": "linear-gradient(rgba(255,255,255,0),rgba(28,28,28,.6))",
      },
      colors: {
        "dark-1": "#080806",
        "dark-2": "#000000",
        "off-white": "#FDFDFD",
        light: "rgb(101,101,101)",
        red: "#fb4918",
        green: "#24c48a",
        blue: "#0082a5",
        yellow: "#fb9800",
        gray: "rgba(255,255,255,.1)",
        "gray-1": "rgba(255,255,255,.3)",
      },

      margin: {
        "80%": "50%",
      },
      screens: {
        xs: "480px",
      },
      width: {
        420: "420px",
        465: "465px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
