import React, { Component, Fragment } from "react";
import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  Grid,
  FormControl,
  Input,
  InputLabel,
  CardActions,
  Button
} from "@material-ui/core";

import { connect } from "react-redux";
import { createDriverProfile } from "../../../store/actions/drivers";

export class DriverInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      passportId: "",
      mainJob: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile) {
      const { address, passportId, mainJob } = nextProps.profile;
      this.setState({
        ...this.state,
        address: address,
        passportId: passportId,
        mainJob: mainJob
      });
    }
  }

  handleOnChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createDriverProfile(this.state);
  };

  render() {
    return (
      <Fragment>
        <Card>
          <form autoComplete="off" noValidate onSubmit={this.handleOnSubmit}>
            <CardHeader
              subheader="The information can be edited"
              title="Thông tin tài xế"
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth required margin="dense">
                    <InputLabel>Địa chỉ</InputLabel>
                    <Input
                      type="text"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleOnChange}
                    />
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormControl fullWidth required margin="dense">
                    <InputLabel>CMND</InputLabel>
                    <Input
                      type="text"
                      name="passportId"
                      value={this.state.passportId}
                      onChange={this.handleOnChange}
                    />
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormControl fullWidth required margin="dense">
                    <InputLabel>Nghề nghiệp</InputLabel>
                    <Input
                      type="text"
                      name="mainJob"
                      value={this.state.mainJob}
                      onChange={this.handleOnChange}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions>
              <Button type="submit" variant="contained">
                {!this.state
                  ? "Cập nhật thông tin tài xế"
                  : "Tạo thông tin tài xế"}
              </Button>
            </CardActions>
          </form>
        </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.driverProfile
});

export default connect(
  mapStateToProps,
  { createDriverProfile }
)(DriverInfo);
