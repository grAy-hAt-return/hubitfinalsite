module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Tabs/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      height: {
        128: "32.5rem",
        138: "41.5rem",
      },
      colors: {
        transparent: "transparent",
        hub: "hub",
        white: "#ffffff",
        primary: {
          100: "#b60690",
          200: "#a0047d",
          300: "#7c0462",
        },
      },
    },
  },

  plugins: [],
};
