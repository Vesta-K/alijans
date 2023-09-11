/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
    },
    extend: {
      fontFamily: {
        thin: ["gteestiThin"],
        ultraBold: ["gteestiUltraBold"],
        bold: ["gteestiBold"],
        light: ["gteestiLight"],
        medium: ["gteestiMedium"],
        regular: ["gteestiRegular"],
      },
      boxShadow: {
        custom: "0px 0px 35px -2px rgba(106, 139, 165, 0.2);",
      },
      backgroundImage: {
        radialGrad:
          "radial-gradient(closest-side, rgba(255, 255, 255, 0.09) 2.5947827845811844%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
};
