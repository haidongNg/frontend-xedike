import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Table,
  TableBody,
  TableHead,
  Grid,
  Container
} from "@material-ui/core";
import TableTripOfDriver from "../../../components/table-trip-of-driver/TableTripOfDriver";
import { getTripDriver } from "../../../store/actions/drivers";
import {
  deleteTrip,
  updateTrip,
  finishTrip
} from "../../../store/actions/trips";
import DialogCustom from "../../../components/dialog-custom/DialogCustom";

export class DashboardDriver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      open: false,
      value: {
        id: "",
        locationFrom: "",
        locationTo: "",
        startTime: "",
        availableSeats: "",
        fee: "",
        isFinished: false
      }
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.props.getTripDriver(match.params.id);
  }

  handleClickItem = data => {
    const {
      _id,
      locationFrom,
      locationTo,
      startTime,
      availableSeats,
      fee,
      isFinished
    } = data;
    this.setState({
      open: true,
      value: {
        ...this.state.value,
        id: _id,
        locationFrom: locationFrom,
        locationTo: locationTo,
        startTime: startTime,
        availableSeats: availableSeats.toString(),
        fee: fee.toString(),
        isFinished: isFinished
      }
    });
  };

  handleClose = newValue => {
    if (newValue) {
      const { match } = this.props;
      this.props.updateTrip(newValue.id, newValue, () => {
        this.setState({
          open: false,
          value: {
            id: "",
            locationFrom: "",
            locationTo: "",
            startTime: "",
            availableSeats: "",
            fee: "",
            isFinished: false
          }
        });
        this.props.getTripDriver(match.params.id);
      });
    } else {
      this.setState({ open: false });
    }
  };

  handleDelete = id => {
    this.props.deleteTrip(id);
    const { match } = this.props;
    this.props.getTripDriver(match.params.id);
  };
  handleFinish = tripId => {
    this.props.finishTrip(tripId);
    const { match } = this.props;
    this.props.getTripDriver(match.params.id);
  };
  renderTableRow = () => {
    return this.props.data.map((data, index) => (
      <TableTripOfDriver
        key={index}
        data={data}
        handleDelete={() => this.handleDelete(data._id)}
        handleClickItem={() => this.handleClickItem(data)}
        handleFinish={() => this.handleFinish(data._id)}
      />
    ));
  };

  render() {
    return (
      <section className="hero is-bold" style={{ minHeight: "65vh" }}>
        <div className="hero-body">
          <Container component="main">
            <Grid container spacing={4}>
              <Grid item xs={12} />
              <Grid item xs={12}>
                <Table>
                  <TableHead />
                  <TableBody>{this.renderTableRow()}</TableBody>
                </Table>
                <DialogCustom
                  keepMounted
                  open={this.state.open}
                  onClose={this.handleClose}
                  value={this.state.value}
                  error={this.props.error}
                />
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  data: state.tripDriver
});

export default connect(
  mapStateToProps,
  { getTripDriver, deleteTrip, updateTrip, finishTrip }
)(DashboardDriver);
