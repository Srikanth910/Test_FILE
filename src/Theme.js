import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          margin: "auto"
        }
      }
    }
  }
});

export default function styles(){
  return(
    <ThemeProvider theme={theme}>
    <CssBaseline />
    
    </ThemeProvider>
  )
}