import React, { Fragment } from "react";
import {
  Card,
  Typography,
  Avatar,
  Divider,
  CardContent,
  Button,
  CardActions,
  LinearProgress
} from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
const UploadCar = props => {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.details}>
        <div>
          <Typography gutterBottom variant="h2">
            name
          </Typography>
          <Typography variant="body1">name</Typography>
          <Typography gutterBottom variant="body2">
            name
          </Typography>
        </div>
        <Avatar className={classes.avatar} src="" />
      </div>
      {/* <Button
                    className={classes.uploadButton}
                    color="primary"
                    variant="text"
                  >
                    Upload picture
                  </Button> */}

      <input
        className={classes.input}
        id="contained-button-file"
        type="file"
        name="file"
        file=""
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          component="span"
          color="default"
          className={classes.button}
        >
          Upload
          <CloudUpload className={classes.rightIcon} />
        </Button>
      </label>
    </Fragment>
  );
};

export default UploadCar;
