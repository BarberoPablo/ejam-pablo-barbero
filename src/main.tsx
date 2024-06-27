import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Usps from "./components/Usps.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
    title: {
      color: "black",
      fontSize: 48,
      textTransform: "capitalize",
      [breakpoints.down("md")]: {
        fontSize: 32,
      },
    },
    "sub-title": {
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
