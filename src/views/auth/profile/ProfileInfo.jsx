import React, { Fragment } from "react";
import moment from "moment";
import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  Grid,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Input,
  RadioGroup,
  Radio,
  Button,
  CardActions
} from "@material-ui/core";
const ProfileInfo = props => {
  const { values, handleOnChange, handleOnSumit } = props;
  return (
    <Fragment>
      <Card>
        <form autoComplete="off" noValidate onSubmit={handleOnSumit}>
          <CardHeader
            subheader="The information can be edited"
            title={values.fullName}
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <FormControl fullWidth required margin="dense">
                  <InputLabel>Email</InputLabel>
                  <Input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl fullWidth required margin="dense">
                  <InputLabel>Họ và Tên</InputLabel>
                  <Input
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl fullWidth required margin="dense" disabled>
                  <InputLabel>User Type</InputLabel>
                  <Input type="text" value={values.userType} />
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl
                  component="fieldset"
                  fullWidth
                  required
                  margin="dense"
                >
                  <FormLabel component="legend">Giới tính</FormLabel>
                  <RadioGroup
                    aria-label="Gender"
                    row
                    name="gender"
                    value={values.gender}
                    onChange={handleOnChange}
                  >
                    <FormControlLabel
                      value="nu"
                      control={<Radio />}
                      label="Nữ"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="nam"
                      control={<Radio />}
                      label="Nam"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl fullWidth required margin="dense">
                  <InputLabel>Số điện thoại</InputLabel>
                  <Input
                    type="number"
                    name="phone"
                    value={values.phone}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl fullWidth required margin="dense">
                  <InputLabel>Ngày sinh</InputLabel>
                  <Input
                    type="date"
                    name="dateofbirth"
                    value={moment(values.dateOfBirth).format("YYYY-MM-DD")}
                    onChange={handleOnChange}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button type="submit" variant="contained">
            Cập nhật thông tin
            </Button>
          </CardActions>
        </form>
      </Card>
    </Fragment>
  );
};

export default ProfileInfo;
