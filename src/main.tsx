import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Usps from "./components/Usps.tsx";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductDetails from "./routes/ProductDetails/ProductDetails.tsx";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
    text: {
      color: "#4D5254",
      fontSize: 16,
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
    },
    "sub-title": {
      color: "#4D5254",
      fontSize: 24,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Usps />
      <ProductDetails />
    </ThemeProvider>
  </React.StrictMode>
);
