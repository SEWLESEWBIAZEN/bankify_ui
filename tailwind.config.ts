/** @type {import('tailwindcss').Config} */
export default {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          bprimary: "var(--bprimary)",
          "bprimary-foreground": "var(--bprimary-foreground)",
        },
        boxShadow: {
          primary: "0 4px 6px -1px var(--bprimary), 0 2px 4px -2px var(--bprimary)",
        },
      },
    },
    plugins: [],
  };
  