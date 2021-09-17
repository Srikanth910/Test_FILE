import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MedicalForm from './components/MedicalForm';
import PharmacyForm from "./components/PharmacyForm";
import Medical from "./components/Medical";


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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/dashboard" component={Header}></Route>
          <Route exact path="/pharmacy-pa" component={PharmacyForm}></Route>
          <Route exact path="/medical-pa" component={Medical}></Route>
          {/* <Route exact path="/medical-pa" component={MedicalForm}></Route> */}
        </Switch>
      </Router>
      </ThemeProvider>
  );
}

export default App;
