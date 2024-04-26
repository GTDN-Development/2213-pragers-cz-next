/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "374px",
      },
      colors: {
        gray: colors.zinc,
        primary: {
          DEFAULT: colors.yellow[300],
          ...colors.yellow,
        },
        original: {
          50: "#EDFCED",
          100: "#D7FBD7",
          200: "#C5F6C5",
          300: "#A5ECA5",
          400: "#82D982",
          500: "#71BD71",
          600: "#4D994D",
          700: "#387538",
          800: "#315931",
          900: "#244724",
          950: "#102910",
        },
        yerba: {
          50: "#F5F5FF",
          100: "#E6E6FA",
          200: "#CECFF5",
          300: "#BCBEEB",
          400: "#878BE0",
          500: "#666BCC",
          600: "#3E45B2",
          700: "#313699",
          800: "#242880",
          900: "#222661",
          950: "#191D42",
        },
        rooibos: {
          50: "#FFD699",
          100: "#FACD89",
          200: "#F5C47A",
          300: "#F0C078",
          400: "#E59E5C",
          500: "#E39043",
          600: "#CC7452",
          700: "#A65A42",
          800: "#8F4632",
          900: "#6E4037",
          950: "#391112",
        },
        matcha: {
          50: "#E3FCF7",
          100: "#C8FAF0",
          200: "#8EF5E0",
          300: "#41EECC",
          400: "#16DEA2",
          500: "#15BF86",
          600: "#11AB68",
          700: "#179961",
          800: "#33805E",
          900: "#174D35",
          950: "#082619",
        },
      },
      backgroundImage: {
        "hero-pattern-white": "url('/pattern/japan-pattern-white.svg')",
        "hero-pattern-black": "url('/pattern/japan-pattern-black.svg')",
      },
      opacity: {
        15: "0.15",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      zIndex: {
        dropbown: "100",
        "sticky-below": "225",
        sticky: "250",
        "sticky-above": "275",
        "fixed-below": "325",
        fixed: "350",
        "fixed-above": "375",
        "offcanvas-below": "425",
        offcanvas: "450",
        "offcanvas-above": "475",
        "popover-below": "525",
        popover: "550",
        "popover-above": "575",
        "modal-below": "625",
        modal: "650",
        "modal-above": "675",
        tooltip: "700",
      },
      transitionTimingFunction: {
        "in-circ": "cubic-bezier(0.55, 0, 1, 0.45)",
        "out-circ": "cubic-bezier(0, 0.55, 0.45, 1)",
        "in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
        "in-back": "cubic-bezier(0.36, 0, 0.66, -0.56)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
    },
  },
  plugins: [],
};
