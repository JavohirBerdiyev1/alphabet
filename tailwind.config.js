/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      /* --- modal “pop” animatsiyasi --- */
      keyframes: {
        pop: {
          "0%":   { transform: "scale(0.7)", opacity: "0" },
          "100%": { transform: "scale(1)",   opacity: "1" }
        }
      },
      animation: {
        pop: "pop 0.3s ease-out forwards"
      }
    }
  },

  plugins: []
};
