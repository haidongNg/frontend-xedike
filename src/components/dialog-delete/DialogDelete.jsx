import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";
const DialogDelete = ({ titleContent, onClose, open, ...other }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      {...other}
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {titleContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Hủy
        </Button>
        <Button onClick={onClose} color="primary" autoFocus>
          Xóa
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogDelete;
