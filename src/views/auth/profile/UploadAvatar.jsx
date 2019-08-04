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
const UploadAvatar = props => {
  const { values, handleOnUpLoad, classes } = props;
  return (
    <Fragment>
      <Card>
        <CardContent>
          <div className={classes.details}>
            <div>
              <Typography gutterBottom variant="h2">
                {values.fullName}
              </Typography>
              <Typography variant="body1">{values.fullName}</Typography>
              <Typography gutterBottom variant="body2">
                {values.fullName}
              </Typography>
            </div>
            <Avatar
              className={classes.avatar}
              src={values.avatar && `http://localhost:5000/${values.avatar}`}
            />
          </div>
        </CardContent>
        <Divider />
        <CardActions>
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
            file={values.file}
            onChange={handleOnUpLoad}
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
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default UploadAvatar;
