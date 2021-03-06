import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Table,
  TableBody,
  TableHead,
  Grid,
  Container
} from "@material-ui/core";
import { getTripHistory, rateDriver } from "../../../store/actions/user";
import { canBookTrip } from "../../../store/actions/trips";
import TableTripOfPassenger from "../../../components/table-trip-of-passenger/TableTripOfPassenger";
import DialogTrip from "../../../components/dialog-trip/DialogTrip";

export class DashboardPassenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
        rate: 0,
        fullName: "",
        avatar: "",
        gender: "",
        tripId: ""
      }
    };
  }

  componentDidMount() {
    this.props.getTripHistory();
  }

  handleClickItem = data => {
    const { trip } = data;
    const passenger = trip.passengers.find(
      u => u.passengerId === this.props.match.params.id
    );
    if (passenger) {
      this.setState({
        open: true,
        value: {
          ...this.state.value,
          tripId: trip._id,
          fullName: trip.driverId.fullName,
          gender: trip.driverId.gender
        }
      });
    }
  };

  handleClose = newValue => {
    this.setState({ open: false });
    if (newValue) {
      const { tripId, rate } = newValue;
      this.props.rateDriver(tripId, { passengerRates: rate }, () => {
        this.setState({
          value: {
            rate: 0,
            fullName: "",
            avatar: "",
            gender: "",
            tripId: ""
          }
        });
        this.props.getTripHistory();
      });
    }
  };

  deleteTripUser = tripId => {
    this.props.canBookTrip(tripId);
  };

  renderTableRow = () => {
    return this.props.listArr.map((data, index) => {
      if (data.trip.isFinished === false)
        return (
          <TableTripOfPassenger
            key={index}
            data={data}
            handleClickItem={() => this.handleClickItem(data)}
            deleteTripUser={() => this.deleteTripUser(data.trip._id)}
          />
        );
    });
  };
  render() {
    return (
      <section className="hero is-bold is-medium" style={{ minHeight: "60vh" }}>
        <div className="hero-body">
          <Container component="main">
            <Grid container spacing={4}>
              <Grid item xs={12} />
              <Grid item xs={12}>
                <Table>
                  <TableHead />
                  <TableBody>{this.renderTableRow()}</TableBody>
                </Table>
              </Grid>
            </Grid>
            <DialogTrip
              keepMounted
              open={this.state.open}
              onClose={this.handleClose}
              value={this.state.value}
            />
          </Container>
        </div>
      </section>
    );
  }
}
const mapStaToProps = state => ({
  listArr: state.listHistory
});

export default connect(
  mapStaToProps,
  { getTripHistory, canBookTrip, rateDriver }
)(DashboardPassenger);
