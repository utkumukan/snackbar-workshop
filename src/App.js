import "./styles.css";
import { status, useCustomizedSnackbar } from "./snackbar";
import { Typography } from "@material-ui/core";
import React from "react";

export default function App() {
  const { snackbar, snackbarWithContent } = useCustomizedSnackbar();

  const buttonOne = () => {
    snackbar("test message", status.ERROR);
  };

  const buttonTwo = () => {
    snackbarWithContent(
      "test message",
      <div>
        <Typography>test message</Typography>
      </div>
    );
  };

  return (
    <div className="App">
      <button type="button" onClick={buttonOne}>
        snackbar
      </button>
      <button type="button" onClick={buttonTwo}>
        snackbar with content
      </button>
    </div>
  );
}
