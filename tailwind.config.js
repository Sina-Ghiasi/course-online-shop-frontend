/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Shabnam", "Cambria", "Georgia"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
