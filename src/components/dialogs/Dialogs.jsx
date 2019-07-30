import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
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
  Radio
} from "@material-ui/core";
const Dialogs = props => {
  const { onClose, open, formBook, disable, ...other } = props;
  const [valueForm, setValueForm] = useState({
    locationGetIn: "",
    locationGetOff: "",
    paymentMethod: "",
    numberOfBookingSeats: '',
    notes: ""
  });

  const handleOnchange = (event) => {
    event.preventDefault();
    setValueForm({
      ...valueForm, [event.target.name]: event.target.value
    })
    console.log(valueForm)
  }
  return (
    <Fragment>
      <Dialog onClose={onClose} open={open} {...other} fullWidth>
        <DialogTitle>Đặt chuyến xe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Số ghế: {formBook.availableSeats}
          </DialogContentText>
          <form>
            <FormControl margin="dense" fullWidth disabled={disable}>
              <InputLabel>Điểm đi</InputLabel>
              <Input name="locationGetIn" value={formBook.locationFrom} />
            </FormControl>
            <FormControl margin="dense" fullWidth disabled={disable}>
              <InputLabel>Điểm đến</InputLabel>
              <Input name="locationGetOff" value={formBook.locationTo} />
            </FormControl>
            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Hình thức thanh toán</FormLabel>
              <RadioGroup
                aria-label="Payment Method"
                row
                name="paymentMethod"
                value={valueForm.paymentMethod}
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
                type="number"
                name="numberOfBookingSeats"
                value={valueForm.numberOfBookingSeats}
                onChange={handleOnchange}
              />
            </FormControl>
            <FormControl margin="dense" fullWidth>
              <InputLabel>Ghi chú</InputLabel>
              <Input type="text" name="notes" value={valueForm.notes} />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Hủy</Button>
          <Button onClick={onClose}>Đặt vé</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

Dialogs.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  formBook: PropTypes.object.isRequired,
  disable: PropTypes.bool
};

export default Dialogs;
