import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory, createMemoryHistory } from "history";
import App from "./App";

const mount = (
  el,
  { onAuthChange, onNavigate, defaultHistory, initialPath }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onAuthChange={onAuthChange} />, el);

  return {
    onParantNavigate({ pathname: nextPathname }) {
      const pathname = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-auth");

  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}
export { mount };
