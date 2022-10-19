/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#E50914",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-textshadow"),
  ],
};
