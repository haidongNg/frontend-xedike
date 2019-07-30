import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

// Material-UI
import {
  withStyles,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Typography,
  Select,
  MenuItem,
  Avatar,
  Snackbar
} from "@material-ui/core";
import { getTrip, reservation } from "../../../store/actions/trips";
import { ArrowForward } from "@material-ui/icons";
import NotificationCustom from "../../../components/notification/NotificationCustom";

const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  details: {
    display: "flex"
  },
  avatar: {
    marginLeft: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
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
    console.log(this.state.info);
    this.props.reservation(id, this.state.values, () => {
      this.setState({ open: true });
      this.props.history.push('/danhsachchuyendi')
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
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={6} xl={4} xs={12}>
              <Card>
                <CardContent>
                  <div className={classes.details}>
                    <div>
                      <Typography gutterBottom variant="h5">
                        Thông tin chuyến đi
                      </Typography>
                      <Typography variant="body1">
                        {this.state.info.locationFrom} <ArrowForward />{" "}
                        {this.state.info.locationTo}
                      </Typography>
                      <Typography variant="body1">
                        Thời gian: {this.state.info.startTime}
                      </Typography>
                      <Typography variant="body1">
                        Số ghế còn trống: {this.state.info.availableSeats}
                      </Typography>
                      <Typography variant="body1">
                        {/* Tài xế: {info.driverId.fullName} */}
                      </Typography>
                    </div>
                    <Avatar className={classes.avatar} src="" />
                  </div>
                </CardContent>
                <Divider />
              </Card>
            </Grid>

            <Grid item lg={8} md={6} xl={8} xs={12}>
              <Card>
                <form
                  autoComplete="off"
                  noValidate
                  onSubmit={this.handleOnSubmit}
                >
                  <CardHeader subheader="The information can be edited" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth required margin="dense">
                          <InputLabel>Điểm đón</InputLabel>
                          <Select
                            name="locationGetIn"
                            value={this.state.values.locationGetIn}
                            onChange={this.handleOnchange}
                          >
                            <MenuItem value="TP Hồ Chí Minh">
                              TP Hồ Chí Minh
                            </MenuItem>
                            <MenuItem value="TP Hà Nội">TP Hà Nội</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth required margin="dense">
                          <InputLabel>Điểm đến</InputLabel>

                          <Select
                            name="locationGetOff"
                            value={this.state.values.locationGetOff}
                            onChange={this.handleOnchange}
                          >
                            <MenuItem value="TP Hồ Chí Minh">
                              TP Hồ Chí Minh
                            </MenuItem>
                            <MenuItem value="TP Hà Nội">TP Hà Nội</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth required margin="dense">
                          <InputLabel>Số ghế đặt</InputLabel>
                          <Input
                            type="number"
                            name="numberOfBookingSeats"
                            value={this.state.values.numberOfBookingSeats}
                            onChange={this.handleOnchange}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl
                          component="fieldset"
                          fullWidth
                          required
                          margin="dense"
                        >
                          <FormLabel component="legend">
                            Hình thức thanh toán
                          </FormLabel>
                          <RadioGroup
                            aria-label="Gender"
                            row
                            name="paymentMethod"
                            defaultValue={this.state.values.paymentMethod}
                            onChange={this.handleOnchange}
                          >
                            <FormControlLabel
                              value="tienmat"
                              control={<Radio />}
                              label="Tiền mặt"
                              labelPlacement="end"
                            />
                            <FormControlLabel
                              value="chuyenkhoan"
                              control={<Radio />}
                              label="Chuyển khoản"
                              labelPlacement="end"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth margin="none">
                          <InputLabel>Ghi chú</InputLabel>
                          <Input
                            type="text"
                            name="notes"
                            rows={3}
                            value={this.state.values.notes}
                            onChange={this.handleOnchange}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button type="submit" variant="contained">
                      Đặt chỗ
                    </Button>
                  </CardActions>
                </form>
              </Card>
            </Grid>
          </Grid>
        </div>
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
