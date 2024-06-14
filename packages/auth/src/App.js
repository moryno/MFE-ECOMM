import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onAuthChange }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/signin">
            <Signin onSignIn={onAuthChange} />
          </Route>
          <Route path="/auth/signup">
            <Signup onSignIn={onAuthChange} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
