/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#938686",
        "ligth-green": "#8EFF8B"
      },
      fontFamily: {
        //font-family: 'Fira Code', monospace;
        "firaCode": ["Fira Code" ,"monospace"]
      }
    },
  },
  plugins: [],
};
