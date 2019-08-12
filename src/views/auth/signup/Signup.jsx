import React, { Fragment, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
  Select,
  FormControlLabel,
  Checkbox,
  Grid,
  MenuItem,
  Typography,
  Container,
  RadioGroup,
  Radio,
  FormLabel,
  FormHelperText,
  makeStyles
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";

//
import { connect } from "react-redux";
import { signUp } from "../../../store/actions/auth";
//
import ProgressCustom from "../../../components/progress/ProgressCustom";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  menu: {
    width: 200
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -8,
    marginLeft: -12
    // position: "fixed",
    // left: "50%",
    // top: "50%",
    // marginTop: -12,
    // marginLeft: -12,
    // width: "100%",
    // height: "100%",
    // zIndex: 9999
  }
}));

const Signup = props => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    password2: "",
    fullName: "",
    userType: "",
    phone: "",
    gender: "",
    dateOfBirth: new Date()
  });
  const [loading, setLoading] = useState(false);
  const timer = useRef();
  const classes = useStyles();

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleOnChange = event => {
    setSignup({
      ...signup,
      [event.target.name]: event.target.value
    });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    if (!loading) {
      setLoading(true);
      timer.current = setTimeout(() => {
        props.signUp(signup, () => {
          props.history.push("/signin");
        });
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  disabled={loading}
                  required
                  margin="dense"
                  error={props.error.email ? true : false}
                >
                  <InputLabel>Email</InputLabel>
                  <Input
                    type="text"
                    name="email"
                    autoFocus
                    value={signup.email}
                    onChange={handleOnChange}
                  />
                  <FormHelperText>{props.error.email}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  disabled={loading}
                  required
                  margin="dense"
                  error={props.error.password ? true : false}
                >
                  <InputLabel>Mật khẩu</InputLabel>
                  <Input
                    type="password"
                    name="password"
                    value={signup.password}
                    onChange={handleOnChange}
                  />
                  <FormHelperText>{props.error.password}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  disabled={loading}
                  required
                  margin="dense"
                  error={props.error.password2 ? true : false}
                >
                  <InputLabel>Nhập lại mật khẩu</InputLabel>
                  <Input
                    type="password"
                    name="password2"
                    value={signup.password2}
                    onChange={handleOnChange}
                  />
                  <FormHelperText>{props.error.password2}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  disabled={loading}
                  required
                  margin="dense"
                  error={props.error.fullName ? true : false}
                >
                  <InputLabel>Họ và Tên</InputLabel>
                  <Input
                    type="text"
                    name="fullName"
                    value={signup.fullName}
                    onChange={handleOnChange}
                  />
                  <FormHelperText>{props.error.fullName}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  disabled={loading}
                  required
                  margin="dense"
                  error={props.error.userType ? true : false}
                >
                  <InputLabel>User Type</InputLabel>
                  <Select
                    displayEmpty
                    value={signup.userType}
                    name="userType"
                    onChange={handleOnChange}
                  >
                    <MenuItem value="driver">Tài xế</MenuItem>
                    <MenuItem value="passenger">Khách hàng</MenuItem>
                  </Select>
                  <FormHelperText>{props.error.userType}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  component="fieldset"
                  fullWidth
                  disabled={loading}
                  required
                  margin="dense"
                  error={props.error.gender ? true : false}
                >
                  <FormLabel component="legend">Giới tính</FormLabel>
                  <RadioGroup
                    aria-label="Gender"
                    row
                    name="gender"
                    value={signup.gender}
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
                  <FormHelperText>{props.error.gender}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  disabled={loading}
                  required
                  margin="dense"
                  error={props.error.phone ? true : false}
                >
                  <InputLabel>Số điện thoại</InputLabel>
                  <Input
                    type="number"
                    value={signup.phone}
                    name="phone"
                    onChange={handleOnChange}
                  />
                  <FormHelperText>{props.error.phone}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  disabled={loading}
                  required
                  margin="dense"
                  error={props.error.dateOfBirth ? true : false}
                >
                  <InputLabel shrink>Ngày sinh</InputLabel>
                  <Input
                    type="date"
                    value={moment(signup.dateOfBirth).format("YYYY-MM-DD")}
                    name="dateOfBirth"
                    onChange={handleOnChange}
                  />
                  <FormHelperText>{props.error.dateOfBirth}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  disabled={loading}
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <div className={classes.wrapper}>
              <Button
                disabled={loading}
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
              >
                Đăng ký
              </Button>
              {loading && (
                <ProgressCustom size={24} className={classes.buttonProgress} />
              )}
            </div>

            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/signin">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  error: state.errors
});

export default connect(
  mapStateToProps,
  { signUp }
)(Signup);
