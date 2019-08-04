import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
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
  Button,
  Avatar,
  withStyles,
  CardMedia
} from "@material-ui/core";

import { addCar } from "../../../store/actions/drivers";
import { CloudUpload } from "@material-ui/icons";
import UploadCar from "./UploadCar";
import { uploadImage } from "../../../store/actions/auth";
const styles = theme => ({
  detail: {
    display: "flex"
  },
  avatar: {
    marginLeft: "auto",
    height: 110,
    width: 100
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

export class CarInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      model: "",
      manufacturingYear: "",
      licensePlate: "",
      numberOfSeats: "",
      carImage: "",
      file: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.carInfo.length) {
      const {
        brand,
        model,
        manufacturingYear,
        licensePlate,
        numberOfSeats,
        carImage
      } = nextProps.profile.carInfo[nextProps.profile.carInfo.length - 1];
      this.setState({
        ...this.state,
        brand: brand,
        model: model,
        manufacturingYear: manufacturingYear,
        licensePlate: licensePlate,
        numberOfSeats: numberOfSeats,
        carImage: carImage
      });
    }
  }
  handleOnchange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleOnUpload = event => {
    this.setState(
      {
        ...this.state,
        carImage: event.target.files && event.target.files[0]
      },
      () => {
        const formData = new FormData();
        formData.append("carImage", this.state.carImage);
        this.props.uploadImage(
          (formData,
          res => {
            this.setState({
              ...this.state,
              carImage: res.user.avatar
            });
          })
        );
      }
    );
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addCar(this.state, () => {
      console.log("ok");
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Card>
          <form autoComplete="off" noValidate onSubmit={this.handleOnSubmit}>
            <CardHeader
              subheader="The information can be edited"
              title="Thông tin xe"
              avatar={
                <div>
                  <Avatar
                    className={classes.avatar}
                    src={
                      this.state.carImage &&
                      `http://localhost:5000/${this.state.carImage}`
                    }
                  />
                </div>
              }
              action={
                <Fragment>
                  <input
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                    name="file"
                    file=""
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      component="span"
                      color="default"
                      className={classes.button}
                    >
                      Upload
                      <CloudUpload className={classes.rightIcon} />
                    </Button>
                  </label>
                </Fragment>
              }
            />
            <Divider />
            <CardMedia
              src={
                this.state.carImage &&
                `http://localhost:5000/${this.state.carImage}`
              }
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} />
                <Grid item md={6} xs={12}>
                  <FormControl fullWidth required margin="dense">
                    <InputLabel>Nhãn xe</InputLabel>
                    <Input
                      type="text"
                      name="brand"
                      value={this.state.brand}
                      onChange={this.handleOnchange}
                    />
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormControl fullWidth required margin="dense">
                    <InputLabel>Model xe</InputLabel>
                    <Input
                      type="text"
                      name="model"
                      value={this.state.model}
                      onChange={this.handleOnchange}
                    />
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormControl fullWidth required margin="dense">
                    <InputLabel>Năm sản xuất</InputLabel>
                    <Input
                      type="text"
                      name="manufacturingYear"
                      value={this.state.manufacturingYear}
                      onChange={this.handleOnchange}
                    />
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormControl fullWidth required margin="dense">
                    <InputLabel>Số ghế trên xe</InputLabel>
                    <Input
                      type="text"
                      name="numberOfSeats"
                      value={this.state.numberOfSeats}
                      onChange={this.handleOnchange}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required margin="dense">
                    <InputLabel>Mã bằng lái</InputLabel>
                    <Input
                      type="text"
                      name="licensePlate"
                      value={this.state.licensePlate}
                      onChange={this.handleOnchange}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions>
              <Button type="submit" variant="contained">
                Cập nhật thông tin xe
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
  { addCar, uploadImage }
)(withStyles(styles)(CarInfo));
