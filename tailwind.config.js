/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBlack: "#000000",
        textDark: "#0f172a",
        colorLight: "#0f172a",
        textWhite: "#fdfdfd",
      },
    },
  },
  plugins: [],
}

