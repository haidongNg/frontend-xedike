import React, { Fragment } from "react";
import {
  CardHeader,
  Divider,
  CardContent,
  Grid,
  FormControl,
  Input,
  InputLabel,
  CardActions,
  Button,
  FormHelperText
} from "@material-ui/core";
const DriverInfoForm = ({
  infoDriver,
  handleOnChange,
  hanldeOnSubmit,
  error
}) => {
  return (
    <Fragment>
      <form autoComplete="off" noValidate onSubmit={hanldeOnSubmit}>
        <CardHeader
          subheader="The information can be edited"
          title="Thông tin tài xế"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                required
                margin="dense"
                error={error.address ? true : false}
              >
                <InputLabel>Địa chỉ</InputLabel>
                <Input
                  type="text"
                  name="address"
                  value={infoDriver.address || ""}
                  onChange={handleOnChange}
                />
                <FormHelperText>{error.address}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl
                fullWidth
                required
                margin="dense"
                error={error.passportId ? true : false}
              >
                <InputLabel>CMND</InputLabel>
                <Input
                  type="text"
                  name="passportId"
                  value={infoDriver.passportId || ""}
                  onChange={handleOnChange}
                />
                <FormHelperText>{error.passportId}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl
                fullWidth
                required
                margin="dense"
                error={error.mainJob ? true : false}
              >
                <InputLabel>Nghề nghiệp</InputLabel>
                <Input
                  type="text"
                  name="mainJob"
                  value={infoDriver.mainJob || ""}
                  onChange={handleOnChange}
                />
                <FormHelperText>{error.mainJob}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button type="submit" variant="outlined" color="primary">
            {!infoDriver
              ? "Thêm thông tin tài xế"
              : "Cập nhật thông tin tài xế"}
          </Button>
        </CardActions>
      </form>
    </Fragment>
  );
};

export default DriverInfoForm;
