/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        beVietnamPro: "Be Vietnam Pro",
        plairFairDisplay: "Playfair Display",
        lobister: "Lobster",
      },
    },
  },
  plugins: [],
};
