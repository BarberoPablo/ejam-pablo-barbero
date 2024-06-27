import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import Banner from "./components/Banner.tsx";
import "./index.css";
import SpecialOffer from "./routes/SpecialOffer/";
import Footer from "./components/Footer.tsx";
import { theme } from "./theme/muiStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Banner />
      <SpecialOffer />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
