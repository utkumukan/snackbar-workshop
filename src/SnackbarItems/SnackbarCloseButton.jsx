import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";

const SnackbarCloseButton = (props) => {
  const { id } = props;
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton
      color="inherit"
      onClick={() => {
        closeSnackbar(id);
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};

SnackbarCloseButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default SnackbarCloseButton;
