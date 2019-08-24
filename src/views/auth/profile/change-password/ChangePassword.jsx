import React, { Fragment } from "react";
import {
  Grid,
  Card,
  CardHeader,
  Divider,
  CardContent,
  FormControl,
  InputLabel,
  Input,
  Button,
  CardActions,
  FormHelperText
} from "@material-ui/core";
const ChangePassword = ({ values, handleOnChange, handleOnSubmit, error }) => {
  return (
    <Fragment>
      <Card>
        <form autoComplete="off" noValidate onSubmit={handleOnSubmit}>
          <CardHeader
            subheader="The information can be edited"
            title="Thay đổi mật khẩu"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <FormControl
                  fullWidth
                  required
                  margin="dense"
                  error={error.oldPassword ? true : false}
                >
                  <InputLabel>Mật khẩu cũ</InputLabel>
                  <Input
                    type="password"
                    name="oldPassword"
                    value={values.oldPassword}
                    onChange={handleOnChange}
                  />
                  <FormHelperText>{error.oldPassword}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl
                  fullWidth
                  required
                  margin="dense"
                  error={error.newPassword ? true : false}
                >
                  <InputLabel>Mật khẩu mới</InputLabel>
                  <Input
                    type="password"
                    name="newPassword"
                    value={values.newPassword}
                    onChange={handleOnChange}
                  />
                  <FormHelperText>{error.newPassword}</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button type="submit" variant="outlined" color="primary">
              Thay đổi mật khẩu
            </Button>
          </CardActions>
        </form>
      </Card>
    </Fragment>
  );
};

export default ChangePassword;
