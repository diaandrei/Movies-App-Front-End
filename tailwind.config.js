/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
    theme: {
      extend: {
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
        },
      },
    },
    plugins: [],
  };
  