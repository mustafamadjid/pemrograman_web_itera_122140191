/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}", // folder src jika kamu pakai struktur folder
  ],
  theme: {
    extend: {
      colors: {
        // warna kustom
        primary: "#4f46e5", // indigo-600
        secondary: "#10b981", // emerald-500
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
