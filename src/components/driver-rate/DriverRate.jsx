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

const DriverRate = ({onClose, value: valueProp, open, ...other }) => {
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
    )
}

DriverRate.propsTypes = {
    onClose: PropsTypes.func.isRequired,
    open: PropsTypes.func.isRequired,
    value: PropsTypes.object.isRequired
  };

export default DriverRate;
