/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "button-color": "var(--button-color)",
        "background-color": "var(--background-color)",
      },
      fontSize: {
        heading: "2.25rem",
      },
      margin: {
        nav_space: "2rem",
      },
    },
  },
  plugins: [],
};
