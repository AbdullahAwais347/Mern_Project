/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      off_white: "#EAEAEA",
      light_black: "#00000066",
      P_white: "#FFFCFC",
      Nav_bar_bg_color: "#FFF",
      black: "#000000",
      shadow_color: "#00000040",
      dashBoard_font_color: "#00000099",
      btn_bg: "#00000080",
    },
    extend: {
      dropShadow: {
        "3xl": "15px 0px 100px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
