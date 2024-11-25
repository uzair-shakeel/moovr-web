/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#A75AF2",
        darkPurple: "#572083",
        lightPurple: "#F3E9FE",
        babyPurple: "#F3E9FE",
      },
    },
  },
  plugins: [],
};
