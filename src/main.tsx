import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import Usps from "./components/Usps.tsx";
import "./index.css";
import SpecialOffer from "./routes/SpecialOffer/";

const defaultTheme = createTheme({});

const { breakpoints } = defaultTheme;

const theme = createTheme({
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Usps />
      <SpecialOffer />
    </ThemeProvider>
  </React.StrictMode>
);
