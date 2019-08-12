import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  getProfile,
  updateProfile,
  uploadImage
} from "../../../../store/actions/auth";
import PersonalInfoForm from "./profile-info/personal-info-form/PersonalInfoForm";
import UploadAvatar from "./profile-info/upload-avatar/UploadAvatar";

import { Grid, Snackbar } from "@material-ui/core";
import NotificationCustom from "../../../../components/notification/NotificationCustom";

export class ProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoProfile: {
        avatar: "",
        dateOfBirth: "",
        email: "",
        fullName: "",
        phone: "",
        gender: "",
        userType: "",
        file: null
      },
      open: false
    };
  }
  componentDidMount() {
    if (Object.keys(this.props.auth.profile).length) {
      const { profile } = this.props.auth;
      this.props.getProfile(profile.id || profile._id, user => {
        const {
          avatar,
          dateOfBirth,
          email,
          fullName,
          gender,
          phone,
          userType
        } = user;
        this.setState({
          infoProfile: {
            ...this.state.infoProfile,
            avatar,
            dateOfBirth,
            email,
            fullName,
            gender,
            phone,
            userType
          }
        });
      });
    }
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

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.updateProfile(this.state.infoProfile, () => {
      this.setState({ open: true });
    });
  };

  handleOnClose = (event, reason) => {
    if (reason === "clickaway") return;
    this.setState({ open: false });
  };

  render() {
    return (
      <Fragment>
        <Grid item lg={4} md={6} xl={4} xs={12}>
          <UploadAvatar
            handleOnUpLoad={this.handleOnUpLoad}
            file={this.state.infoProfile.file}
            avatar={this.state.infoProfile.avatar}
          />
        </Grid>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          <PersonalInfoForm
            values={this.state.infoProfile}
            handleOnChange={this.handleOnChange}
            handleOnSubmit={this.handleOnSubmit}
          />
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleOnClose}
        >
          <NotificationCustom
            onClose={this.handleOnClose}
            variant="success"
            message="Cập nhập thành công"
          />
        </Snackbar>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { getProfile, updateProfile, uploadImage }
)(ProfileContent);
