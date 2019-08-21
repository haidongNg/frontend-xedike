import React from "react";
import moment from "moment";
import {
  TableRow,
  TableCell,
  Chip,
  Grid,
  IconButton,
  Tooltip
} from "@material-ui/core";
import {
  PersonPinCircle,
  Place,
  Group,
  AccessTime,
  DateRange,
  Edit,
  Delete,
  Check
} from "@material-ui/icons";
const TableTripOfDriver = ({
  data,
  handleDelete,
  handleClickItem,
  handleFinish
}) => {
  return (
    <TableRow>
      <TableCell>
        <PersonPinCircle />
        {data.locationFrom}
      </TableCell>
      <TableCell>
        <Place />
        {data.locationTo}
      </TableCell>
      <TableCell>
        <Grid container spacing={2}>
          <Grid item>
            <DateRange />
            {moment(data.startTime).format("L")}
          </Grid>
          <Grid item>
            <AccessTime />
            {moment(data.startTime).format("LT")}
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>
        <Group /> {data.availableSeats}
      </TableCell>
      <TableCell>{data.tree}VNĐ</TableCell>
      <TableCell>
        <Chip
          label={data.isFinished ? "Hoàn thành" : "Chưa hoàn thành"}
          color={data.isFinished ? "primary" : "secondary"}
          size="small"
        />
      </TableCell>
      <TableCell>
        <IconButton disabled={data.isFinished} onClick={handleFinish}>
          <Check />
        </IconButton>
        <IconButton disabled={data.isFinished} onClick={handleClickItem}>
          <Edit />
        </IconButton>
        <IconButton disabled={data.isFinished} onClick={handleDelete}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
export default TableTripOfDriver;
