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
  Group,
  DriveEta,
  AccessTime,
  DateRange
} from "@material-ui/icons";
import moment from "moment";
import {calcRate} from '../../shared//utils/utils'
const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10
  }
}));
const TableRows = ({ index, data, handleOnClickRoute, hidden }) => {
  const classes = useStyles();
  return (
    <TableRow key={index}>
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
              src={`http://localhost:5000/${data.driver.userId.avatar || data.trip.driverId.avatar}`}
              className={classes.avatar}
            />
          </Grid>
          <Grid item>
            {data.driver.userId.fullName || data.trip.driverId.fullName}
            <Rating value={calcRate(data.driver.passengerRates)} readOnly />
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="right">{data.trip.fee}VNĐ</TableCell>
      {!hidden ? (
         <TableCell />
      ) : (
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
      )}
    </TableRow>
  );
};

export default TableRows;
