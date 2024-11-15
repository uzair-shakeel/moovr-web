/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#A75AF2", // You can name it 'primary' or any other meaningful name
        darkPurple: "#572083", // You can name it 'primary' or any other meaningful name
      },
    },
  },
  plugins: [],
};
