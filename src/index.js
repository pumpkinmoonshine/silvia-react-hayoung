import React from "react";
import ReactDOM from "react-dom";
import Routes from "../src/Routes";
import store from "./store/store";
import GlobalStyle from "./styles/GlobalStyles";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>,
  document.getElementById("root")
);
