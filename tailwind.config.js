/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        animation: {
          fadeIn: "fadeIn 1s ease-in-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        },
      },
    },
    colors: {
      primary: "#f14e95",
      bg: "#0a0a0a",
    },
  },
  plugins: [],
};
