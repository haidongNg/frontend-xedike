import React, { Fragment } from "react";
import {
  Card,
  Typography,
  Avatar,
  Divider,
  CardContent,
  Button,
  CardActions,
  makeStyles
} from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
const useStyles = makeStyles(theme => ({
  details: {
    display: "flex"
  },
  avatar: {
    marginLeft: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  },
  input: {
    display: "none"
  },
  button: {
    margin: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));
const UploadCar = props => {
  const { file, avatar, handleOnUpLoad } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <Card>
        <CardContent>
          <div className={classes.details}>
            <div>
              <Typography gutterBottom variant="h2" />
              <Typography variant="body1" />
            </div>
            <Avatar
              className={classes.avatar}
              src={avatar && `http://localhost:5000/${avatar}`}
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
            file={file}
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

export default UploadCar;

