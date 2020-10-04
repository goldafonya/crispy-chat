import React from "react";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import { THEME } from "../constants/THEME";

export const RootComponent = () => {

  return (
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  );
};