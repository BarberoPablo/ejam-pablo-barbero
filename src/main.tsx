import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Usps from "./components/Usps.tsx";

import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Usps />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
