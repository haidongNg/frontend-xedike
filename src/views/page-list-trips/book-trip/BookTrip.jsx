import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

// Material-UI
import { withStyles, Grid, Snackbar, Container } from "@material-ui/core";
import { getTrip, reservation } from "../../../store/actions/trips";
import NotificationCustom from "../../../components/notification/NotificationCustom";
import BookTripForm from "./book-trip-form/BookTripForm";
import BookTripInfo from "./book-trip-info/BookTripInfo";

const styles = theme => ({
  root: {
    padding: theme.spacing(2)
  },
  details: {
    display: "block"
  },
  // avatar: {
  //   marginLeft: "auto",
  //   height: 110,
  //   width: 100,
  //   flexShrink: 0,
  //   flexGrow: 0
  // },
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
  }
});

export class BookTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        locationGetIn: "",
        locationGetOff: "",
        paymentMethod: "",
        numberOfBookingSeats: 1,
        notes: ""
      },
      info: {},
      open: false
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getTrip(id, data => {
      this.setState({ info: data });
    });
  }

  handleOnchange = event => {
    this.setState({
      values: { ...this.state.values, [event.target.name]: event.target.value }
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const id = this.state.info._id;
    this.props.reservation(id, this.state.values, () => {
      this.setState({ open: true });
      this.props.history.push("/list-trips");
    });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Container component="main" fixed className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={6} md={6} xl={6} xs={12}>
              <BookTripInfo info={this.state.info} classes={classes} />
            </Grid>

            <Grid item lg={6} md={6} xl={6} xs={12}>
              <BookTripForm
                info={this.state.info}
                valuesForm={this.state.values}
                handleOnchange={this.handleOnchange}
                handleOnSubmit={this.handleOnSubmit}
              />
            </Grid>
          </Grid>
        </Container>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={this.state.open}
          autoCapitalize={3000}
          onClose={this.handleClose}
        >
          <NotificationCustom
            onClose={this.handleClose}
            variant="success"
            message="Đặt vé thành công"
          />
        </Snackbar>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getTrip, reservation }
)(withStyles(styles)(BookTrip));
