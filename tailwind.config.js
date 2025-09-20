/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/**/*.js"],
  safelist: ["typed-cursor"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        roseCustom: "#c62368",
        yellowCustom: "#c78014",
        toolsbg: "#d53867",
        dark: {
          border: "#333",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        native: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
      boxShadow: {
        custom: "0 4px 14px rgba(0, 0, 0, 0.1)",
        dark: "0 4px 14px rgba(0,0,0,0.25)",
      },
      animation: {
        morph: "morph 8s ease-in-out infinite",
        "pulse-slow": "pulse 10s infinite",
      },
      keyframes: {
        morph: {
          "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
        },
        pulse: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
