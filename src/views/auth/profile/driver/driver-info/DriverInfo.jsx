import React, { Component, Fragment } from "react";
import { Card, Snackbar } from "@material-ui/core";

import { connect } from "react-redux";
import {
  createDriverProfile,
  updateDriverProfile,
  getDriverProfile
} from "../../../../../store/actions/drivers";
import NotificationCustom from "../../../../../components/notification/NotificationCustom";
import DriverInfoForm from "./driver-info-form/DriverInfoForm";
export class DriverInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoDriver: {
        address: "",
        passportId: "",
        mainJob: ""
      },
      open: false
    };
  }
  componentWillReceiveProps(nextProps) {
    const { address, passportId, mainJob } = nextProps.driverProfile;
    if (nextProps.driverProfile) {
      this.setState({
        infoDriver: {
          address: address,
          passportId: passportId,
          mainJob: mainJob
        }
      });
    }
  }

  handleOnChange = event => {
    this.setState({
      infoDriver: {
        ...this.state.infoDriver,
        [event.target.name]: event.target.value
      }
    });
  };

  hanldeOnSubmit = event => {
    event.preventDefault();
    const { address, passportId, mainJob } = this.state.infoDriver;
    console.log(this.props.driverProfile);
    if (!Object.keys(this.props.driverProfile).length) {
      this.props.createDriverProfile({ address, passportId, mainJob }, () => {
        this.setState({ open: true });
      });
    } else {
      this.props.updateDriverProfile({ address, passportId, mainJob }, () => {
        this.setState({ open: true });
      });
    }
  };

  handleOnClose = (event, reason) => {
    if (reason === "clickaway") return;
    this.setState({ open: false });
  };

  render() {
    return (
      <Fragment>
        <Card>
          <DriverInfoForm
            infoDriver={this.state.infoDriver}
            handleOnChange={this.handleOnChange}
            hanldeOnSubmit={this.hanldeOnSubmit}
            error={this.props.error}
          />
        </Card>
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

const mapStateToProps = state => ({
  auth: state.auth,
  driverProfile: state.driverProfile,
  error: state.errors
});

export default connect(
  mapStateToProps,
  { createDriverProfile, updateDriverProfile, getDriverProfile }
)(DriverInfo);
