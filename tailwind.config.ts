import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
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
          accent: "#F0E8F8",
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
        grey: {
          100: "#C3B3B3",
        },
      },
      dark: {
        background: {
          default: "#0f0f0f",
          accent: "#0f0718",
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
        grey: {
          100: "#C3B3B3",
        },
      },
    },
    extend: {
      backgroundImage: ({ theme }) => ({
        "gradient-light-background": `linear-gradient(to left top, ${theme(
          "colors.light.background.default"
        )}, ${theme("colors.light.background.accent")})`,
        "gradient-dark-background": `linear-gradient(to left top, ${theme(
          "colors.dark.background.default"
        )}, ${theme("colors.dark.background.accent")})`,
      }),
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "2.75rem",
      "4xl": "3.5rem",
    },
  },
  plugins: [],
} satisfies Config;

export default config;
