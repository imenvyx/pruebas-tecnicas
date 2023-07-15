/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-0": "#F6F3F0" /* Main Primary color */,
        "primary-1": "#FFFFFF",
        "primary-2": "#FFFEFE",
        "primary-3": "#CDC7C1 ",
        "secondary-1-0": "#A3A4A7 " /* Main Secondary color (1) */,
        "secondary-1-1": "#FFFFFF ",
        "secondary-1-2": "#D4D4D5 ",
        "secondary-1-3": "#84858B ",
        "secondary-1-4": "#666973 ",
        "secondary-2-0": "#B3B8B5 " /* Main Secondary color (2) */,
        "secondary-2-1": "#FFFFFF ",
        "secondary-2-2": "#DDDEDD ",
        "secondary-2-3": "#909992 ",
        "secondary-2-4": "#6F7F73 ",
        light: {
          primary: "#0A0814",
          background: "#010205",
          text: "#DFDEE6",
          secondary: "#F1543D",
        },
        dark: {
          background: "#B3B8B5",
          text: "#909992",
          primary: "#00FF00",
          secondary: "#666973",
        },
      },
    },
  },
  plugins: [],
};
