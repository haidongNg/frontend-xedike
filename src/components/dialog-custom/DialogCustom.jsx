import React, { useState, useEffect } from "react";
import PropsTypes from "prop-types";
import moment from "moment";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  FormControl,
  Input,
  InputLabel,
  Chip,
  createMuiTheme
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { green, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red
  }
});

const DialogCustom = ({ onClose, value: valueProp, open, ...other }) => {
  const [value, setValue] = useState(valueProp);
  useEffect(() => {
    if (open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };
  const handleOk = () => {
    onClose(value);
  };

  const handleOnChange = event => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Dialog
      fullWidth
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">
        Thông tin{" "}
        <Chip
          color={value.isFinished ? "primary" : "secondary"}
          label={value.isFinished ? "Hoàn thành" : "Chưa hoàn thành"}
        />{" "}
      </DialogTitle>

      <DialogContent dividers>
        <FormControl fullWidth margin="dense">
          <InputLabel>Điểm đi</InputLabel>
          <Input
            text="text"
            name="locationFrom"
            value={value.locationFrom}
            onChange={handleOnChange}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel>Điểm đến</InputLabel>
          <Input
            type="text"
            name="locationTo"
            value={value.locationTo}
            onChange={handleOnChange}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel>Thời gian bắt đầu</InputLabel>
          <Input
            type="datetime-local"
            name="startTime"
            value={moment(value.startTime)
              .utc()
              .format("YYYY-MM-DDTHH:mm:ss.SSS")}
            onChange={handleOnChange}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel>Số ghế</InputLabel>
          <Input
            type="number"
            name="availableSeats"
            value={value.availableSeats}
            onChange={handleOnChange}
          />
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel>Giá vé</InputLabel>
          <Input
            type="number"
            name="tree"
            value={value.tree}
            onChange={handleOnChange}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <ThemeProvider theme={theme}>
          <Button color="secondary" onClick={handleCancel}>
            Hủy
          </Button>

          <Button color="primary" onClick={handleOk}>
            Cập nhật
          </Button>
        </ThemeProvider>
      </DialogActions>
    </Dialog>
  );
};

DialogCustom.propsTypes = {
  onClose: PropsTypes.func.isRequired,
  open: PropsTypes.func.isRequired,
  value: PropsTypes.object.isRequired
};

export default DialogCustom;
