import { Montserrat } from "next/font/google";
import resolveConfig from "tailwindcss/resolveConfig";
import config from "../../tailwind.config";
import { createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const tailwindConfig = resolveConfig(config);
const montserrat = Montserrat({ subsets: ["latin"] });

const fontFamily: TypographyOptions = {
  fontFamily: [
    montserrat.style.fontFamily,
    "-apple-system",
    "BlinkMacSystemFont",
    "'Segoe UI'",
    "Roboto",
    "'Helvetica Neue'",
    "Arial",
    "sans-serif",
    "'Apple Color Emoji'",
    "'Segoe UI Emoji'",
    "'Segoe UI Symbol'",
  ].join(","),
  h1: {
    fontSize: tailwindConfig.theme.fontSize["4xl"],
    fontWeight: 600,
    letterSpacing: -0.75,
  },
  h2: {
    fontSize: tailwindConfig.theme.fontSize["3xl"],
    fontWeight: 600,
    letterSpacing: -0.75,
  },
  h3: {
    fontSize: tailwindConfig.theme.fontSize["2xl"],
    letterSpacing: -0.75,
  },
  body1: {
    fontSize: tailwindConfig.theme.fontSize.base,
  },
  body2: {
    fontSize: tailwindConfig.theme.fontSize.sm,
  },
  button: {
    textTransform: "none",
  },
};

const colors = tailwindConfig.theme?.colors;

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: colors.light.background,
    primary: colors.light.primary,
    secondary: colors.light.secondary,
  },
  typography: fontFamily,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: colors.dark.background,
    primary: colors.dark.primary,
    secondary: colors.dark.secondary,
  },
  typography: fontFamily,
});
