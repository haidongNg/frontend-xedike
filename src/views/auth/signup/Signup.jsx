import React, { Fragment, useState, useRef, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  CssBaseline,
  Avatar,
  Icon,
  Typography,
  Select,
  MenuItem,
  Grid,
  Paper,
  makeStyles,
  FormControlLabel,
  CircularProgress,
  FormLabel,
  RadioGroup,
  Radio,
  Box,
  Link,
  FormHelperText
} from "@material-ui/core";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker
// } from "@material-ui/pickers";
// import MomentUtils from "@date-io/moment";

//
import { connect } from "react-redux";
import { signUp } from "../../../store/actions/auth";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    padding: "0 !important"
  },
  image: {
    backgroundImage: "url(./images/login.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1)
  },
  margin: {
    margin: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  wrapperButton: {
    margin: theme.spacing(1),
    position: "relative"
  },
  radio: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
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
    dateOfBirth: ""
  });

  const [loading, setLoading] = useState(false);
  const timer = useRef();
  const classes = useStyles();

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleOnChange = name => event => {
    setSignup({
      ...signup,
      [name]: event.target.value
    });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    props.signUp(signup, () => {
      if (!loading) {
        setLoading(true);
        timer.current = setTimeout(() => {
          setLoading(false);
          props.history.push("/signin");
        }, 2000);
      }
    });
  };
  return (
    <Fragment>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <Icon>lock</Icon>
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng Kí
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
              <FormControl fullWidth margin="normal" error={props.error.email ? true : false} >
                <InputLabel>Email</InputLabel>
                <Input
                  type="text"
                  name="email"
                  value={signup.email}
                  onChange={handleOnChange("email")}
                />
                <FormHelperText>{props.error.email}</FormHelperText>
              </FormControl>
              <FormControl fullWidth margin="normal" error={props.error.password ? true : false }>
                <InputLabel>Mật khẩu</InputLabel>
                <Input
                  type="password"
                  name="password"
                  value={signup.password}
                  onChange={handleOnChange("password")}
                />
                <FormHelperText>{props.error.password}</FormHelperText>
              </FormControl>
              <FormControl fullWidth margin="normal" error={props.error.password2 ? true : false }>
                <InputLabel>Nhập lại mật khẩu</InputLabel>
                <Input
                  type="password"
                  name="password2"
                  value={signup.password2}
                  onChange={handleOnChange("password2")}
                />
                <FormHelperText>{props.error.password2}</FormHelperText>
              </FormControl>
              <FormControl fullWidth margin="normal" error={props.error.fullName ? true : false }>
                <InputLabel>Họ và Tên</InputLabel>
                <Input
                  type="text"
                  name="fullName"
                  value={signup.fullName}
                  onChange={handleOnChange("fullName")}
                />
                <FormHelperText>{props.error.fullName}</FormHelperText>
              </FormControl>
              <FormControl fullWidth margin="normal" error={props.error.userType ? true : false }>
                <InputLabel>User Type</InputLabel>
                <Select
                  displayEmpty
                  className={classes.selectEmpty}
                  value={signup.userType}
                  name="userType"
                  onChange={handleOnChange("userType")}
                >
                  <MenuItem value="driver">Driver</MenuItem>
                  <MenuItem value="passenger">Passenger</MenuItem>
                </Select>
                <FormHelperText>{props.error.userType}</FormHelperText>
              </FormControl>
              <FormControl component="fieldset" fullWidth margin="normal" error={props.error.gender ? true : false }>
                <FormLabel component="legend">Giới tính</FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  row
                  name="gender"
                  value={signup.gender}
                  onChange={handleOnChange("gender")}
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
              <FormControl fullWidth margin="normal" error={props.error.phone ? true : false }>
                <InputLabel>Số điện thoại</InputLabel>
                <Input
                  type="number"
                  value={signup.phone}
                  name="phone"
                  onChange={handleOnChange("phone")}
                />
                <FormHelperText>{props.error.phone}</FormHelperText>
              </FormControl>
              <FormControl fullWidth margin="normal" error={props.error.dateOfBirth ? true : false }>
                <InputLabel>Ngày sinh</InputLabel>
                <Input
                  type="date"
                  value={signup.dateOfBirth}
                  name="dateOfBirth"
                  onChange={handleOnChange("dateOfBirth")}
                />
                <FormHelperText>{props.error.dateOfBirth}</FormHelperText>
              </FormControl>
              <div className={classes.wrapperButton}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Đăng kí
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
              <Grid container>
                <Grid item xs>
                  <Link
                    variant="body2"
                    onClick={() => {
                      props.history.push("/signin");
                    }}
                  >
                    {"I have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5} />
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
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
