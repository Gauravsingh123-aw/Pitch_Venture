/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      headercolor: "#ff5733",
      brandBlue: "#1e3a8a",
      blue: "#1DA1F2",
      gray: "gray",
      white: "white",
      lightGray: "#D1D5DB",
      textBlue: "#1E40AF",
    },
    backgroundColor: {
      bodyMain: "rgb(207 250 254)",
      black: "black",
      gray: "gray",
      green: "green",
      mainBackground: "#E2E8F0",
      white: "#fff",
    },
    width: {
      bodyWidth: "100%",
    },
    height: {
      bodyHeight: "100vh",
    },

    extend: {},
  },
  plugins: [],
};

