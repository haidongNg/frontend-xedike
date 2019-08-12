import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, Snackbar } from "@material-ui/core";

import {
  addCar,
  uploadCarImage,
  getCarInfo,
  updateCar
} from "../../../../../store/actions/drivers";
import NotificationCustom from "../../../../../components/notification/NotificationCustom";
import CarInfoForm from "./car-info-form/CarInfoForm";

export class CarInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carInfo: {
        _id: null,
        brand: "",
        model: "",
        manufacturingYear: "",
        licensePlate: "",
        numberOfSeats: "",
        carImage: "",
        file: null
      },
      open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.driverProfile) {
      nextProps.getCarInfo(nextProps.driverProfile._id, car => {
        const {
          _id,
          brand,
          model,
          manufacturingYear,
          licensePlate,
          numberOfSeats,
          carImage
        } = car.driver.carInfo[car.driver.carInfo.length - 1];
        this.setState({
          carInfo: {
            ...this.state.carInfo,
            _id: _id,
            brand: brand,
            model: model,
            manufacturingYear: manufacturingYear,
            licensePlate: licensePlate,
            numberOfSeats: numberOfSeats,
            carImage: carImage
          }
        });
      });
    }
  }
  handleOnchange = event => {
    this.setState({
      carInfo: {
        ...this.state.carInfo,
        [event.target.name]: event.target.value
      }
    });
  };

  handleOnUploadCar = event => {
    this.setState(
      {
        carInfo: {
          ...this.state.carInfo,
          carImage: event.target.files && event.target.files[0]
        }
      },
      () => {
        const formDataCar = new FormData();
        formDataCar.append("carImage", this.state.carImage);
        this.props.uploadCarImage(
          (this.state._id,
          formDataCar,
          res => {
            console.log(res.user);
            this.setState({
              carInfo: {
                ...this.state.carInfo,
                carImage: res.user.carImage
              }
            });
          })
        );
      }
    );
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const {
      _id,
      brand,
      model,
      manufacturingYear,
      licensePlate,
      numberOfSeats
    } = this.state.carInfo;
    if (_id === (undefined || null)) {
      this.props.addCar(
        { brand, model, manufacturingYear, licensePlate, numberOfSeats },
        () => {
          this.setState({ open: true });
        }
      );
    } else {
      this.props.updateCar(
        _id,
        { brand, model, manufacturingYear, licensePlate, numberOfSeats },
        () => {
          this.setState({ open: true });
        }
      );
    }
  };

  handleOnClose = (event, reason) => {
    if (reason === "clickaway") return;
    this.setState({ open: false });
  };
  render() {
    return (
      <Fragment>
        <Card>
          <CarInfoForm
            carInfo={this.state.carInfo}
            handleOnSubmit={this.handleOnSubmit}
            handleOnchange={this.handleOnchange}
            handleOnUploadCar={this.handleOnUploadCar}
          />
        </Card>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleOnClose}
        >
          <NotificationCustom
            onClose={this.handleOnClose}
            variant="success"
            message="Cập nhập thành công"
          />
        </Snackbar>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  driverProfile: state.driverProfile
});

export default connect(
  mapStateToProps,
  { addCar, uploadCarImage, getCarInfo, updateCar }
)(CarInfo);
