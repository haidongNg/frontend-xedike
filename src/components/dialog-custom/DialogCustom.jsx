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
  createMuiTheme,
  FormHelperText
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { green, red } from "@material-ui/core/colors";
import SelectCustom from "../select-custom/SelectCustom";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red
  }
});

const DialogCustom = ({ onClose, value: valueProp, open, error, ...other }) => {
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
      [event.target.name]: event.target.value
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
        <SelectCustom
          required
          variant="standard"
          margin="dense"
          name="locationFrom"
          label="Điểm đi"
          value={value.locationFrom}
          onChangeSelect={handleOnChange}
        />
        <SelectCustom
          required
          variant="standard"
          margin="dense"
          name="locationTo"
          label="Điểm đến"
          value={value.locationTo}
          onChangeSelect={handleOnChange}
        />
        <FormControl
          fullWidth
          margin="dense"
          error={error.startTime ? true : false}
        >
          <InputLabel>Thời gian bắt đầu</InputLabel>
          <Input
            type="datetime-local"
            name="startTime"
            value={moment(value.startTime)
              .utc()
              .format("YYYY-MM-DDTHH:mm:ss.SSS")}
            onChange={handleOnChange}
          />
          <FormHelperText>{error.startTime}</FormHelperText>
        </FormControl>
        <FormControl
          fullWidth
          margin="dense"
          error={error.availableSeats ? true : false}
        >
          <InputLabel>Số ghế</InputLabel>
          <Input
            type="number"
            name="availableSeats"
            value={value.availableSeats}
            onChange={handleOnChange}
          />
          <FormHelperText>{error.availableSeats}</FormHelperText>
        </FormControl>
        <FormControl fullWidth margin="dense" error={error.fee ? true : false}>
          <InputLabel>Giá vé</InputLabel>
          <Input
            type="number"
            name="fee"
            value={value.fee}
            onChange={handleOnChange}
          />
          <FormHelperText>{error.fee}</FormHelperText>
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
