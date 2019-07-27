import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import moment from "moment";
// Material-UI
import {
  withStyles,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Typography,
  LinearProgress,
  Avatar
} from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
//
import {
  getProfile,
  uploadImage,
  updateProfile
} from "../../../store/actions/auth";

const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
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
  progress: {
    marginTop: theme.spacing(2)
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
});

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullName: "",
      userType: "",
      phone: "",
      gender: "",
      dateOfBirth: "",
      avatar: "",
      file: null
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) return;
    const { profile } = this.props.secure;
    this.props.getProfile(profile.id, user => {
      this.setState(user);
    });
  }

  handleOnChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleOnUpLoad = event => {
    this.setState(
      {
        ...this.state,
        file: event.target.files && event.target.files[0]
      },
      () => {
        const formData = new FormData();
        formData.append("avatar", this.state.file);
        this.props.uploadImage(formData, res => {
          this.setState({
            avatar: res.user.avatar
          });
        });
      }
    );
  };

  handleOnSumit = event => {
    event.preventDefault();
    this.props.updateProfile(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={6} xl={4} xs={12}>
              <Card>
                <CardContent>
                  <div className={classes.details}>
                    <div>
                      <Typography gutterBottom variant="h2">
                        {this.state.fullName}
                      </Typography>
                      <Typography variant="body1">
                        {this.state.fullName}
                      </Typography>
                      <Typography gutterBottom variant="body2">
                        {this.state.fullName}
                      </Typography>
                    </div>
                    <Avatar
                      className={classes.avatar}
                      src={
                        this.state.avatar &&
                        `http://localhost:5000/${this.state.avatar}`
                      }
                    />
                  </div>
                  <div className={classes.progress}>
                    <Typography variant="body1">
                      Profile Completeness: 70%
                    </Typography>
                    <LinearProgress value={70} variant="determinate" />
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
                    file={this.state.file}
                    onChange={this.handleOnUpLoad}
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
            </Grid>

            <Grid item lg={8} md={6} xl={8} xs={12}>
              <Card>
                <form
                  autoComplete="off"
                  noValidate
                  onSubmit={this.handleOnSumit}
                >
                  <CardHeader
                    subheader="The information can be edited"
                    title={this.state.fullName}
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth required margin="dense">
                          <InputLabel>Email</InputLabel>
                          <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleOnChange}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth required margin="dense">
                          <InputLabel>Họ và Tên</InputLabel>
                          <Input
                            type="text"
                            name="fullName"
                            value={this.state.fullName}
                            onChange={this.handleOnChange}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth required margin="dense" disabled>
                          <InputLabel>User Type</InputLabel>
                          <Input type="text" value={this.state.userType} />
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl
                          component="fieldset"
                          fullWidth
                          required
                          margin="dense"
                        >
                          <FormLabel component="legend">Giới tính</FormLabel>
                          <RadioGroup
                            aria-label="Gender"
                            row
                            name="gender"
                            value={this.state.gender}
                            onChange={this.handleOnChange}
                          >
                            <FormControlLabel
                              value="nu"
                              control={<Radio />}
                              label="Nữ"
                              labelPlacement="end"
                            />
                            <FormControlLabel
                              value="nam"
                              control={<Radio />}
                              label="Nam"
                              labelPlacement="end"
                            />
                            <FormControlLabel
                              value="other"
                              control={<Radio />}
                              label="Other"
                              labelPlacement="end"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth required margin="dense">
                          <InputLabel>Số điện thoại</InputLabel>
                          <Input
                            type="number"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleOnChange}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth required margin="dense">
                          <InputLabel>Ngày sinh</InputLabel>
                          <Input
                            type="date"
                            name="dateofbirth"
                            value={moment(this.state.dateOfBirth).format(
                              "YYYY-MM-DD"
                            )}
                            onChange={this.handleOnChange}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button type="submit" variant="contained">
                      update
                    </Button>
                  </CardActions>
                </form>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  secure: state.auth
});

export default connect(
  mapStateToProps,
  { getProfile, uploadImage, updateProfile }
)(withStyles(styles)(Profile));
