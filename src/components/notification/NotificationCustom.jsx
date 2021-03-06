import React from "react";
import { makeStyles, SnackbarContent, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Close, CheckCircle, Warning, ErrorOutline, Info } from "@material-ui/icons";
import { amber, green} from '@material-ui/core/colors';

const variantIcon = {
  success: CheckCircle,
  warning: Warning,
  error: ErrorOutline,
  info: Info
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
}));

const NotificationCustom = props => {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];
  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      message={
        <span className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
          <Close className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
};

Notification.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};

export default NotificationCustom;
