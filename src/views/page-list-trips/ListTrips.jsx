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
  Button,
  Snackbar
} from "@material-ui/core";
import NotificationCustom from "../../components/notification/NotificationCustom";

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
      open: false
    };
  }

  componentDidMount() {
    this.props.getTrips(data => {
      this.setState({ data: data });
    });
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    this.setState({ open: false });
  };

  handleOnClickRoute = id => {
    const { isAuthenticated, profile } = this.props.secure;
    if (!isAuthenticated || profile.userType === "driver") {
      this.setState({ open: true });
    } else {
      this.props.history.push(`/book-trip/${id}`);
    }
  };
  renderListTables = () =>
    this.state.data.map((data, index) => (
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
            fullWidth
            size="small"
            variant="outlined"
            color="inherit"
            onClick={() => this.handleOnClickRoute(data._id)}
          >
            Xem chuyến đi
          </Button>
        </TableCell>
      </TableRow>
    ));
  render() {
    const { classes } = this.props;
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
            </div>
          </div>
        </section>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
        >
          <NotificationCustom
            onClose={this.handleClose}
            variant="error"
            message={this.props.secure.profile.userType === "driver" ? 'Bạn không có quyền truy cập' : 'Bạn chưa đăng nhập' }
          />
        </Snackbar>
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
