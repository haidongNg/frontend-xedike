import React from "react";
import {
  TableRow,
  TableCell,
  Avatar,
  makeStyles,
  Grid,
  Chip,
  IconButton
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { calcRate } from '../../shared/utils/utils'
import {
  PersonPinCircle,
  Place,
  Group,
  DriveEta,
  AccessTime,
  DateRange,
  Cancel,
  RateReview
} from "@material-ui/icons";
import moment from "moment";
const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10
  }
}));
const TableTripOfPassenger = ({ index, data, handleClickItem, deleteTripUser }) => {
  const classes = useStyles();
  
  return (
    <TableRow key={index}>
      <TableCell >
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
      <TableCell>
        <Grid container spacing={2}>
          <Grid item>
            <DriveEta />
            {data.driver.carInfo[data.driver.carInfo.length - 1].brand}
          </Grid>
          <Grid item>
            <Group />
            {data.driver.carInfo[data.driver.carInfo.length - 1].numberOfSeats}
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar
              src={data.driver.userId.avatar || data.trip.driverId.avatar}
              className={classes.avatar}
            />
          </Grid>
          <Grid item>
            {data.driver.userId.fullName || data.trip.driverId.fullName}
            <Rating value={calcRate(data.driver.passengers)} readOnly />
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>{data.trip.tree}VNĐ</TableCell>
      <TableCell>
        <Chip color="secondary" label="Đang chạy" />
      </TableCell>
      <TableCell>
        <IconButton  onClick={handleClickItem}>
          <RateReview />
        </IconButton>
        <IconButton onClick={deleteTripUser} >
          <Cancel />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TableTripOfPassenger;
