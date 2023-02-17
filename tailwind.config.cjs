/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e5f876",

          secondary: "#FFF",

          accent: "#1FB2A5",

          neutral: "#1f2023",

          "base-100": "#2e2f36",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
