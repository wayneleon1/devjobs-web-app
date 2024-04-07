/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryViolet: "#5964E0",
        LightViolet: "#939BF4",
        VeryDarkBlue: "#19202D",
        Midnight: "#121721",
        PrimaryGray: "#9DAEC2",
        LightGrey: "#F4F6F8",
        DarkGrey: "#6E8098",
      },
    },
  },
  plugins: [],
};
