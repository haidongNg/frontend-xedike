import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from 'clsx';
const useStyles = makeStyles({
  root: {
    position: "relative"
  }
});
const ProgressCustom = props => {
  const classes = useStyles();
  const { className, size } = props;
  return (
    <CircularProgress
      variant="indeterminate"
      className={clsx(className)}
      size={size}
    />
  );
};

export default ProgressCustom;
