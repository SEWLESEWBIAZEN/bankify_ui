/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"], // Use the variable for the font
      },
      colors: {
       hover: "rgba(248, 250, 252, 1)",
        hoverForeground : "rgba(0, 0, 0, 0.06)",
      },
      boxShadow: {
        primary: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
