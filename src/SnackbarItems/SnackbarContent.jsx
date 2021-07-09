import PropTypes from "prop-types";
import React, { forwardRef } from "react";

import CollapsableSnackbar from "./CollapsableSnackbar";

const SnackbarContent = forwardRef((props, ref) => {
  const { children, message, id } = props;

  return (
    <div ref={ref}>
      <CollapsableSnackbar message={message} id={id}>
        {children}
      </CollapsableSnackbar>
    </div>
  );
});

SnackbarContent.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default SnackbarContent;
