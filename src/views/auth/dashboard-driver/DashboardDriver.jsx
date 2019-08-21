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
import { deleteTrip, updateTrip, finishTrip } from "../../../store/actions/trips";
import DialogCustom from "../../../components/dialog-custom/DialogCustom";
import EmtyComponent from "../../../components/emty-component/EmtyComponent";

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
        tree: "",
        isFinished: false
      }
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.props.getTripDriver(match.params.id, data => {
      this.setState({ data: data });
    });
  }

  handleClickItem = data => {
    const {
      _id,
      locationFrom,
      locationTo,
      startTime,
      availableSeats,
      tree,
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
        availableSeats: availableSeats,
        tree: tree,
        isFinished: isFinished
      }
    });
  };

  handleClose = newValue => {
    this.setState({ open: false });
    if (newValue) {
      const { match } = this.props;
      this.props.updateTrip(newValue.id, newValue);
      this.setState({
        value: {
          id: "",
          locationFrom: "",
          locationTo: "",
          startTime: "",
          availableSeats: "",
          tree: "",
          isFinished: false
        }
      });
      this.props.getTripDriver(match.params.id, data => {
        this.setState({ data: data });
      });
    }
  };

  handleDelete = id => {
    this.props.deleteTrip(id);
  };
  handleFinish = (tripId) => {
    this.props.finishTrip(tripId);
  }
  renderTableRow = () => {
    return this.state.data.map((data, index) => (
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
      <section className="hero is-bold">
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
                />
              </Grid>
            </Grid>
          </Container>
        </div>

        <EmtyComponent />
      </section>
    );
  }
}

export default connect(
  null,
  { getTripDriver, deleteTrip, updateTrip, finishTrip }
)(DashboardDriver);
