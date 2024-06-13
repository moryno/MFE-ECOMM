import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <Header />
        <MarketingApp />
      </Router>
    </StylesProvider>
  );
};
