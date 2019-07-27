import React, { Fragment, useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  makeStyles
} from "@material-ui/core";
import { LockOutlined, Visibility, VisibilityOff } from "@material-ui/icons";

//
import { signIn } from "../../../store/actions/auth";
import ProgressCustom from "../../../components/progress/ProgressCustom";

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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Signin = props => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
  // const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleShowPassword = () => {
    setShow(true ? false : true);
  };

  const handleOnChange = event => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    if (!loading) {
      setLoading(true);
      timer.current = setTimeout(() => {
        props.signIn(login, () => {
          props.history.push("/");
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
            Đăng nhập
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
            <FormControl
              required
              margin="normal"
              fullWidth
              error={props.error.email ? true : false}
            >
              <InputLabel>Email</InputLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoFocus
                value={login.email}
                onChange={handleOnChange}
              />
              <FormHelperText>{props.error.email}</FormHelperText>
            </FormControl>
            <FormControl
              required
              margin="normal"
              fullWidth
              error={props.error.password ? true : false}
            >
              <InputLabel>Mật khẩu</InputLabel>
              <Input
                name="password"
                type={show ? "text" : "password"}
                id="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={handleShowPassword}>
                      {show ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                value={login.password}
                onChange={handleOnChange}
              />
              <FormHelperText>{props.error.password}</FormHelperText>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/signin">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {loading && <ProgressCustom size={100} />}
      </Container>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  error: state.errors
});

export default connect(
  mapStateToProps,
  { signIn }
)(Signin);
