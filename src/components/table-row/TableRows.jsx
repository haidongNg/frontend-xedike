import React from "react";
import {
  TableRow,
  TableCell,
  Button,
  Avatar,
  makeStyles,
  Grid
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import {
  PersonPinCircle,
  Place,
  AirlineSeatLegroomExtra,
  Group,
  DriveEta,
  AccessTime,
  AttachMoney,
  DateRange
} from "@material-ui/icons";
import moment from "moment";
const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10
  }
}));
const TableRows = ({ index, data, handleOnClickRoute }) => {
  const classes = useStyles();
  return (
    <TableRow key={index}>
      {console.log(data)}
      <TableCell component="th" scope="row">
        <PersonPinCircle />
        {data.trip.locationFrom}
      </TableCell>
      <TableCell>
        <Place /> {data.trip.locationTo}
      </TableCell>
      <TableCell>
        <Grid container spacing={2}>
          <Grid item>
            <DateRange />
            {moment(data.trip.startTime).format("L")}
          </Grid>
          <Grid item>
            <AccessTime />
            {moment(data.trip.startTime).format("LT")}
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="right">
        <Grid container spacing={2}>
          <Grid item>
            <DriveEta />{" "}
            {data.driver.carInfo[data.driver.carInfo.length - 1].brand}
          </Grid>
          <Grid item>
            <Group />{" "}
            {data.driver.carInfo[data.driver.carInfo.length - 1].numberOfSeats}
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="right">
        <Grid container spacing={2}>
          <Grid item>
            <Avatar
              src={data.driver.userId.avatar}
              className={classes.avatar}
            />
          </Grid>
          <Grid item>
            {data.driver.userId.fullName}
            <Rating value={data.driver.passengerRates.length} readOnly />
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="right">{data.trip.tree}VNĐ</TableCell>
      <TableCell align="center">
        <Button
          fullWidth
          size="small"
          variant="outlined"
          color="inherit"
          onClick={() => handleOnClickRoute(data.trip._id)}
        >
          Xem chuyến đi
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TableRows;
