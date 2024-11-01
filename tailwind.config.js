/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#A75AF2", // You can name it 'primary' or any other meaningful name
        lightPurple: "#D8B6FC", // You can name it 'primary' or any other meaningful name
        babyPurple: "#F3E9FE", // You can name it 'primary' or any other meaningful name
        primaryGray: "#161616", // You can name it 'primary' or any other meaningful name
        bgGray: "#F3E9FE",
      },
    },
  },
  plugins: [],
};
