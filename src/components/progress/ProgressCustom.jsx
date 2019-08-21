import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";

const ProgressCustom = props => {
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
