import React, { Fragment } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  withStyles
} from "@material-ui/core";
const Dialogs = ({...props}) => {
  const { onClose, open, ...other } = props;

  return (
    <Fragment>
      <Dialog onClose={onClose} open={open} {...other} fullWidth>
        <DialogTitle>Đặt chuyến xe</DialogTitle>
        <DialogContent>
          <DialogContentText>Dialog conten text</DialogContentText>
          <FormControl margin="dense" fullWidth>
            <InputLabel>Điểm đi</InputLabel>
            <Select name="locationGetIn" value="hcm">
              <MenuItem value={other.locationGetIn}>HCM</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin="dense" fullWidth>
            <InputLabel>Điểm đến</InputLabel>
            <Select name="locationGetOff" value="hn">
              <MenuItem value={other.locationGetOff}>HN</MenuItem>
            </Select>
          </FormControl>
          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Hình thức thanh toán</FormLabel>
            <RadioGroup
              aria-label="Payment Method"
              row
              name="paymentMethod"
              value={other.paymentMethod}
            >
              <FormControlLabel
                value="tienmat"
                control={<Radio />}
                label="Tiền mặt"
                labelPlacement="end"
              />
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Card"
                labelPlacement="end"
              />
              <FormControlLabel
                value="chuyenkhoang"
                control={<Radio />}
                label="Chuyển khoản"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
          <FormControl margin="dense" fullWidth>
            <InputLabel>Số ghế đặt</InputLabel>
            <Input
              type="text"
              name="numberOfBookingSeats"
              value={other.numberOfBookingSeats}
            />
          </FormControl>
          <FormControl margin="dense" fullWidth>
            <InputLabel>Ghi chú</InputLabel>
            <Input type="text" name="notes" value={other.notes} />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Hủy</Button>
          <Button onClick={onClose}>Đặt vé</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default Dialogs;
