import { Montserrat } from "next/font/google";
import resolveConfig from "tailwindcss/resolveConfig";
import config from "../../tailwind.config";
import { ThemeOptions, createTheme } from "@mui/material/styles";
import LinkBehaviour from "@/components/Link";

const tailwindConfig = resolveConfig(config);
const montserrat = Montserrat({ subsets: ["latin"] });

declare module "@mui/material" {
  interface ButtonPropsSizeOverrides {
    xlarge: true;
  }
}

const themeDefaults: ThemeOptions = {
  typography: {
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
      "@media (max-width:768px)": {
        fontSize: tailwindConfig.theme.fontSize["2xl"],
      },
    },
    h2: {
      fontSize: tailwindConfig.theme.fontSize["3xl"],
      fontWeight: 600,
      letterSpacing: -0.75,
      "@media (max-width:768px)": {
        fontSize: tailwindConfig.theme.fontSize["xl"],
      },
    },
    h3: {
      fontSize: tailwindConfig.theme.fontSize["2xl"],
      letterSpacing: -0.75,
      "@media (max-width:768px)": {
        fontSize: tailwindConfig.theme.fontSize["lg"],
      },
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
  },
  shape: {
    borderRadius: 9,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: "xlarge" },
          style: {
            padding: "14px 28px",
          },
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehaviour,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: tailwindConfig.theme.colors.light.primary.main,
          boxShadow: "0px 10px 15px 2px rgba(0,0,0,0.05)",
        },
      },
    },
  },
};

const colors = tailwindConfig.theme?.colors;

export const lightTheme = createTheme({
  ...themeDefaults,
  palette: {
    mode: "light",
    background: colors.light.background,
    primary: colors.light.primary,
    secondary: colors.light.secondary,
    grey: colors.light.grey,
  },
});

export const darkTheme = createTheme({
  ...themeDefaults,
  palette: {
    mode: "dark",
    background: colors.dark.background,
    primary: colors.dark.primary,
    secondary: colors.dark.secondary,
    grey: colors.dark.grey,
  },
});
