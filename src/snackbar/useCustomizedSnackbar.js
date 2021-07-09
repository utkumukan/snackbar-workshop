import { SnackbarCloseButton, SnackbarContent } from "../SnackbarItems";
import { useSnackbar } from "notistack";
import React from "react";

const useCustomizedSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const snackbar = (message, variant, autoDurationMillisecond = 3000) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: autoDurationMillisecond,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      action: (key) => <SnackbarCloseButton id={key} />
    });
  };

  const snackbarWithContent = (message, children) => {
    enqueueSnackbar("", {
      persist: true,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      content: (key) => (
        <SnackbarContent id={key} message={message}>
          {children}
        </SnackbarContent>
      )
    });
  };

  return { snackbar, snackbarWithContent };
};

export default useCustomizedSnackbar;
