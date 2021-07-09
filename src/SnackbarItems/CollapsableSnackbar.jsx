import {
  Box,
  Card,
  CardActions,
  Collapse,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import classnames from "classnames";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";

import styles from "./CollapsableSnackbar.styles";

const CollapsableSnackbar = (props) => {
  const { children, message, id } = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const { closeSnackbar } = useSnackbar();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = useCallback(() => {
    setExpanded((oldExpanded) => !oldExpanded);
  }, []);

  const handleDismiss = useCallback(() => {
    closeSnackbar(id);
  }, [id, closeSnackbar]);

  return (
    <Card className={classes.card}>
      <CardActions classes={{ root: classes.actionRoot }}>
        <Grid container className={classes.actionGrid}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <IconButton className={classes.expand}>
              <InfoOutlinedIcon />
            </IconButton>
            <Typography className={classes.typography}>{message}</Typography>
          </Box>
          <Grid item>
            <div className={classes.icons}>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
              <IconButton className={classes.expand} onClick={handleDismiss}>
                <CloseIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Paper className={classes.collapse} square>
          {children}
        </Paper>
      </Collapse>
    </Card>
  );
};

CollapsableSnackbar.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default CollapsableSnackbar;
