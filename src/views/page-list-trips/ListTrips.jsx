import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getTrips } from "../../store/actions/trips";
//
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  withStyles,
  Button
} from "@material-ui/core";
import Dialogs from "../../components/dialogs/Dialogs";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

export class ListTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      open: false,
      formBook: {
        locationGetIn: '',
        locationGetOff: '',
        paymentMethod: '',
        numberOfBookingSeats: 1,
        notes: ''
      }
    };
  }

  componentDidMount() {
    this.props.getTrips(data => {
      this.setState({ data: data });
    });
  }

  handleClickOpen = value => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  renderListTables = () => {
    return this.state.data.map((data, index) => (
      <TableRow key={index}>
        <TableCell component="th" scope="row">
          {data.locationFrom}
        </TableCell>
        <TableCell align="right">{data.locationTo}</TableCell>
        <TableCell align="right">{data.driverId.fullName}</TableCell>
        <TableCell align="right">{data.startTime}</TableCell>
        <TableCell align="right">{data.availableSeats}</TableCell>
        <TableCell align="right">{data.tree}</TableCell>
        <TableCell align="right">{data.tree}</TableCell>
        <TableCell align="center">
          <Button
            variant="outlined"
            color="inherit"
            onClick={this.handleClickOpen}
          >
            Đặt vé
          </Button>
        </TableCell>
      </TableRow>
    ));
  };
  render() {
    const { classes, secure } = this.props;
    return (
      <Fragment>
        <section className="hero is-primary is-medium">
          <div className="hero-body">
            <div className="container">
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Điểm đi</TableCell>
                      <TableCell>Điểm đến</TableCell>
                      <TableCell align="right">Tài xế</TableCell>
                      <TableCell align="right">Thời gian</TableCell>
                      <TableCell align="right">Số ghế trống</TableCell>
                      <TableCell align="right">Quãng đường</TableCell>
                      <TableCell align="right">Giá vé</TableCell>
                      <TableCell align="center" />
                    </TableRow>
                  </TableHead>
                  <TableBody>{this.renderListTables()}</TableBody>
                </Table>
              </Paper>
              <Dialogs
                onClose={this.handleClose}
                open={this.state.open}
                {...this.state.formBook}
              />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  secure: state.auth
});
export default connect(
  mapStateToProps,
  { getTrips }
)(withStyles(styles)(ListTrips));
