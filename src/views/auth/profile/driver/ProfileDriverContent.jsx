import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

import { getDriverProfile } from "../../../../store/actions/drivers";
import DriverInfo from "./driver-info/DriverInfo";
import CarInfo from "./car-info/CarInfo";
export class ProfileDriverContent extends Component {

  componentDidMount() {
    const { profile } = this.props.auth;
    this.props.getDriverProfile(profile.id || profile._id);
  }

  render() {
    return (
      <Fragment>
        <Grid item lg={4} md={6} xl={4} xs={12} />
        <Grid item lg={8} md={6} xl={8} xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <DriverInfo />
            </Grid>
            <Grid item xs={12}>
              <CarInfo />
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  driverProfile: state.driverProfile
});

export default connect(
  mapStateToProps,
  { getDriverProfile }
)(ProfileDriverContent);
