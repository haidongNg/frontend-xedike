import React, { useState, useEffect } from "react";
import PropsTypes from "prop-types";
import moment from "moment";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Chip,
  Grid,
  createMuiTheme
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { ThemeProvider } from "@material-ui/styles";
import { green, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red
  }
});
const DialogTrip = ({ onClose, value: valueProp, open, ...other }) => {
  const [value, setValue] = useState(valueProp.rate);
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

  const handleOnChange = (event) => {
    setValue({...value, [event.target.name]: Number(event.target.value)});
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
        Đánh giá tài xế <Chip color="secondary" label="Đang chạy" />{" "}
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            {valueProp.fullName}
            <Rating name="rate" value={value.rate} onChange={handleOnChange} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <ThemeProvider theme={theme}>
          <Button color="secondary" onClick={handleCancel}>
            Hủy
          </Button>

          <Button color="primary" onClick={handleOk}>
            Đánh giá
          </Button>
        </ThemeProvider>
      </DialogActions>
    </Dialog>
  );
};

DialogTrip.propsTypes = {
  onClose: PropsTypes.func.isRequired,
  open: PropsTypes.func.isRequired,
  value: PropsTypes.object.isRequired
};

export default DialogTrip;
