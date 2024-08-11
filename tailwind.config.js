/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#4B40EE",
      },
      fontSize: {
        xl: "18px",
      },
    },
  },
  plugins: [],
};
