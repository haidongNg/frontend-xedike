import React, { Fragment } from "react";
import {
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
  makeStyles
} from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
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
  input: {
    display: "none"
  },
  button: {
    margin: theme.spacing(6, 1, 1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const CarInfoForm = ({
  carInfo,
  handleOnSubmit,
  handleOnchange,
  handleOnUploadCar
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <form autoComplete="off" noValidate onSubmit={handleOnSubmit}>
        <CardHeader
          subheader="The information can be edited"
          title="Thông tin xe"
          avatar={
            <div className={classes.details}>
              <Avatar
                className={classes.avatar}
                src={
                  carInfo.carImage &&
                  `http://localhost:5000/${carInfo.carImage}`
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
                file={carInfo.file || ""}
                onChange={handleOnUploadCar}
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
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} />
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required margin="dense">
                <InputLabel>Nhã nxe</InputLabel>
                <Input
                  type="text"
                  name="brand"
                  value={carInfo.brand}
                  onChange={handleOnchange}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required margin="dense">
                <InputLabel>Model xe</InputLabel>
                <Input
                  type="text"
                  name="model"
                  value={carInfo.model}
                  onChange={handleOnchange}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required margin="dense">
                <InputLabel>Năm sản xuất</InputLabel>
                <Input
                  type="number"
                  name="manufacturingYear"
                  value={carInfo.manufacturingYear}
                  onChange={handleOnchange}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth required margin="dense">
                <InputLabel>Số ghế trên xe</InputLabel>
                <Input
                  type="number"
                  name="numberOfSeats"
                  value={carInfo.numberOfSeats}
                  onChange={handleOnchange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required margin="dense">
                <InputLabel>Mã bằng lái</InputLabel>
                <Input
                  type="text"
                  name="licensePlate"
                  value={carInfo.licensePlate}
                  onChange={handleOnchange}
                />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button type="submit" variant="outlined" color="primary">
            {carInfo._id ? "Cập nhật thông tin xe" : "Thêm thông tin xe"}
          </Button>
        </CardActions>
      </form>
    </Fragment>
  );
};

export default CarInfoForm;
