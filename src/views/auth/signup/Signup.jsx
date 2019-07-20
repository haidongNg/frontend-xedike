import React, { Fragment, useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Select,
  MenuItem,
  Grid,
  Container
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
const Signup = () => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    password2: "",
    fullName: "",
    userType: "",
    phone: "",
    dateOfBirth: Date.now()
  });
  return (
    <div>
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
            <Container maxWidth="md">
              <Card>
                <form>
                  <CardHeader
                    title={
                      <Typography align="center" variant="h4">
                        Đăng Ký
                      </Typography>
                    }
                  />
                  <CardContent>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="baseline"
                      spacing={1}
                    >
                      <Grid item xs={12} sm={5}>
                        <FormControl fullWidth margin="normal">
                          <InputLabel>Email</InputLabel>
                          <Input type="text" value={signup.email} />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                          <InputLabel>Mật khẩu</InputLabel>
                          <Input type="password" value={signup.password} />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                          <InputLabel>Confirm Password</InputLabel>
                          <Input type="password" value={signup.password2} />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={5}>
                        <FormControl fullWidth margin="normal">
                          <InputLabel>Họ và Tên</InputLabel>
                          <Input type="text" value={signup.fullName} />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                          <InputLabel>User Type</InputLabel>
                          <Select displayEmpty value={signup.userType}>
                            <MenuItem value="driver">Driver</MenuItem>
                            <MenuItem value="passenger">Passenger</MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                          <InputLabel>Số điện thoại</InputLabel>
                          <Input type="number" value={signup.phone} />
                        </FormControl>

                        <MuiPickersUtilsProvider utils={MomentUtils}>
                          <KeyboardDatePicker
                            fullWidth
                            value={signup.dateOfBirth}
                            margin="normal"
                            label="Ngày sinh"
                            KeyboardButtonProps={{'aria-label': 'change date'}}
                          />
                        </MuiPickersUtilsProvider>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth>Đăng ký</Button>
                  </CardActions>
                </form>
              </Card>
              </Container>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
