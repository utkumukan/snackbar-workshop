import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";
import App from "./App";
import React from "react";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <SnackbarProvider maxSnack={10}>
    <App />
  </SnackbarProvider>,
  rootElement
);
