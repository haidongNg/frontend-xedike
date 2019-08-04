import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
// Material-UI
import { withStyles, Grid, Container } from "@material-ui/core";
//
import {
  getProfile,
  uploadImage,
  updateProfile
} from "../../../store/actions/auth";
import { getDriverProfile } from "../../../store/actions/drivers";
import DriverInfo from "./DriverInfo";
import CarInfo from "./CarInfo";
import ProfileInfo from "./ProfileInfo";
import UploadAvatar from "./UploadAvatar";
import UploadCar from "./UploadCar";
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
  },
  cardBottom: {
    marginTop: theme.spacing(2)
  }
});

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoProfile: {
        email: "",
        fullName: "",
        userType: "",
        phone: "",
        gender: "",
        dateOfBirth: "",
        avatar: "",
        file: null
      }
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const { profile } = this.props.secure;
    if (!token) return;
    this.props.getProfile(profile.id || profile._id, user => {
      this.setState({ infoProfile: user });
    });
    if (profile.userType === "driver")
      this.props.getDriverProfile(profile.id || profile._id);
  }

  handleOnChange = event => {
    this.setState({
      infoProfile: {
        ...this.state.infoProfile,
        [event.target.name]: event.target.value
      }
    });
  };

  handleOnUpLoad = event => {
    this.setState(
      {
        infoProfile: {
          ...this.state.infoProfile,
          file: event.target.files && event.target.files[0]
        }
      },
      () => {
        const formData = new FormData();
        formData.append("avatar", this.state.infoProfile.file);
        this.props.uploadImage(formData, res => {
          this.setState({
            infoProfile: { ...this.state.infoProfile, avatar: res.user.avatar }
          });
        });
      }
    );
  };

  handleOnSumit = event => {
    event.preventDefault();
    this.props.updateProfile(this.state.infoProfile);
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Container className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={6} xl={4} xs={12}>
              <UploadAvatar
                classes={classes}
                values={this.state.infoProfile}
                handleOnUpLoad={this.handleOnUpLoad}
              />
            </Grid>

            <Grid item lg={8} md={6} xl={8} xs={12}>
              <ProfileInfo
                values={this.state.infoProfile}
                handleOnChange={this.handleOnChange}
                handleOnSumit={this.handleOnSumit}
              />
            </Grid>
          </Grid>
          {this.props.secure.profile.userType === "driver" ? (
            <Fragment>
              <Grid container spacing={4}>
                <Grid item lg={4} md={6} xl={4} xs={12} />
                <Grid item lg={8} md={6} xl={8} xs={12}>
                  <DriverInfo />
                  <CarInfo />
                </Grid>
              </Grid>
            </Fragment>
          ) : (
            ""
          )}
        </Container>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  secure: state.auth
});

export default connect(
  mapStateToProps,
  { getProfile, uploadImage, updateProfile, getDriverProfile }
)(withStyles(styles)(Profile));
