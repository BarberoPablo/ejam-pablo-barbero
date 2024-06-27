import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    text: React.CSSProperties;
    header: React.CSSProperties;
    "big-title": React.CSSProperties;
    "big-sub-title": React.CSSProperties;
    step: React.CSSProperties;
    "mid-title": React.CSSProperties;
    "mid-sub-title": React.CSSProperties;
    "crossed-text": React.CSSProperties;
    "blue-text": React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    text: true;
    header: true;
    "big-title": true;
    "big-sub-title": true;
    step: true;
    "mid-title": true;
    "mid-sub-title": true;
    "crossed-text": true;
    "blue-text": true;
  }
}

const defaultTheme = createTheme({});

const { breakpoints } = defaultTheme;

export const theme = createTheme({
  typography: {
    fontFamily: "inherit",
    text: {
      color: "#4D5254",
      fontSize: 16,
      [breakpoints.down("md")]: {
        fontSize: 12,
      },
    },
    header: {
      color: "white",
      textTransform: "uppercase",
      fontSize: 12,
    },
    "big-title": {
      color: "black",
      fontSize: 48,
      textTransform: "capitalize",
      [breakpoints.down("md")]: {
        fontSize: 32,
      },
    },
    "big-sub-title": {
      color: "#4D5254",
      fontSize: 24,
      [breakpoints.down("md")]: {
        fontSize: 16,
      },
    },
    step: {
      color: "black",
      fontSize: 20,
      [breakpoints.down("md")]: {
        fontSize: 12,
      },
    },
    "mid-title": {
      color: "black",
      fontSize: 32,
      [breakpoints.down("md")]: {
        fontSize: 24,
      },
    },
    "mid-sub-title": {
      color: "black",
      fontSize: 20,
      [breakpoints.down("md")]: {
        fontSize: 14,
      },
    },
    "crossed-text": {
      color: "#969696",
      fontSize: 16,
      textDecoration: "line-through",
      [breakpoints.down("md")]: {
        fontSize: 10,
      },
    },
    "blue-text": {
      color: "#2C7EF8",
      fontSize: 22,
      [breakpoints.down("md")]: {
        fontSize: 14,
      },
    },
  },
});
