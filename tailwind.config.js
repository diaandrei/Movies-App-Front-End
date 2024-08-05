/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
      },
      colors: {
        darkBlue: {
          900: "#1A1A2E",
          800: "#2A2A4E",
          700: "#374151",
        },
        gold: {
          500: "#FFD700",
        },
        cardBg: {
          400: "#1a1a1a",
        },
        modal: {
          500: "#374151",
        },
        error: {
          700: "#dd3333",
        },
      },
    },
  },
  plugins: [],
};
