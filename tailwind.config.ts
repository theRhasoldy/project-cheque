import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class", "media"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      light: {
        background: {
          default: "#fefefe",
        },
        primary: {
          main: "#f08080",
          light: "#f4978e",
          dark: "#e56b6f",
          contrastText: "#fefefe",
        },
        secondary: {
          main: "#7b2cbf",
          light: "#9d4edd",
          dark: "#5a189a",
          contrastText: "#fff",
        },
      },
      dark: {
        background: {
          default: "#0f0f0f",
        },
        primary: {
          main: "#f8ad9d",
          light: "#fbc4ab",
          dark: "#e56b6f",
          contrastText: "#000",
        },
        secondary: {
          main: "#c77dff",
          light: "#e0aaff",
          dark: "#9d4edd",
          contrastText: "#000",
        },
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
    },
  },
  plugins: [],
} satisfies Config;

export default config;
