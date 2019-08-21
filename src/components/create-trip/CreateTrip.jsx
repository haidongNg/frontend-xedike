import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
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
  InputAdornment
} from "@material-ui/core";
import { createTrip } from "../../store/actions/trips";
import SelectCustom from "../select-custom/SelectCustom";

const CreateTrip = props => {
  const { onClose, open } = props;
  const [valueForm, setValueForm] = useState({
    locationFrom: "",
    locationTo: "",
    startTime: new Date(),
    availableSeats: "",
    tree: ""
  });

  useEffect(() => {
    if (open) {
      setValueForm({
        locationFrom: "",
        locationTo: "",
        startTime: "",
        availableSeats: "",
        tree: ""
      });
    }
  }, [open]);

  const handleOnchange = event => {
    event.preventDefault();
    setValueForm({
      ...valueForm,
      [event.target.name]: event.target.value
    });
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    props.createTrip(valueForm, () => {
      setValueForm({
        locationFrom: "",
        locationTo: "",
        startTime: "",
        availableSeats: "",
        tree: ""
      });
    });
  };
  return (
    <Fragment>
      <Dialog onClose={onClose} open={open} fullWidth>
        <form onSubmit={handleOnSubmit}>
          <DialogTitle>Tạo chuyến xe</DialogTitle>
          <DialogContent>
            <DialogContentText>Thông tin chuyến xe</DialogContentText>
            <SelectCustom
              required
              variant="standard"
              margin="dense"
              name="locationFrom"
              label="Điểm đi"
              value={valueForm.locationFrom}
              onChangeSelect={handleOnchange}
            />
            <SelectCustom
              required
              variant="standard"
              margin="dense"
              label="Điểm đến"
              name="locationTo"
              value={valueForm.locationTo}
              onChangeSelect={handleOnchange}
            />
            <FormControl margin="dense" fullWidth>
              <InputLabel shrink>Ngày khởi hành</InputLabel>
              <Input
                type="datetime-local"
                name="startTime"
                value={moment(valueForm.startTime).utc().format('YYYY-MM-DDTHH:mm:ss.SSS')}
                onChange={handleOnchange}
              />
            </FormControl>
            <FormControl margin="dense" fullWidth>
              <InputLabel>Số ghế hàng khách</InputLabel>
              <Input
                type="number"
                name="availableSeats"
                value={valueForm.availableSeats}
                onChange={handleOnchange}
              />
            </FormControl>
            <FormControl margin="dense" fullWidth>
              <InputLabel>Số phí</InputLabel>
              <Input
                type="number"
                name="tree"
                endAdornment={
                  <InputAdornment position="end">VNĐ</InputAdornment>
                }
                value={valueForm.tree}
                onChange={handleOnchange}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Hủy</Button>
            <Button type="submit" onClick={onClose}>
              Tạo chuyến đi
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Fragment>
  );
};

CreateTrip.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  disable: PropTypes.bool
};

export default connect(
  null,
  { createTrip }
)(CreateTrip);
