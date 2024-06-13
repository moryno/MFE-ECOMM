import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <MarketingApp />
        {/* <Switch>
          <Route exact path="/" component={MarketingApp} />
        </Switch> */}
      </BrowserRouter>
    </StylesProvider>
  );
};
