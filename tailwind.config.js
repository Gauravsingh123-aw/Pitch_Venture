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
        "footer":'#338778',
        "footer_blue":"#131e32",
      },
      fontSize: {
        heading: "2.25rem",
      },
      margin: {
        nav_space: "2rem",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        Kanit: ['Kanit', 'sans-serif'],
      },
      blur: {
        xs: '1px',
        xl: '10px',
      },
    },
  },
  plugins: [],
};
