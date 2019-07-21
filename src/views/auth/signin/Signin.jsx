import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import {
  CssBaseline,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  Grid,
  Avatar,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  makeStyles,
  Box,
  Icon,
  FormHelperText
} from "@material-ui/core";

//
import { signIn } from "../../../store/actions/auth";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
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
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Signin = props => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
  const classes = useStyles();

  const handleOnChange = name => event => {
    setLogin({
      ...login,
      [name]: event.target.value
    });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    props.signIn(login, () => {
      props.history.push('/')
    })
  }
  return (
    <Fragment>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <Icon>lock</Icon>
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng Nhập
            </Typography>

            <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
              <FormControl
                fullWidth
                margin="normal"
                error={props.error.email ? true : false}
              >
                <InputLabel>Email</InputLabel>
                <Input
                  type="text"
                  value={login.email}
                  name="email"
                  onChange={handleOnChange("email")}
                />
                <FormHelperText>{props.error.email}</FormHelperText>
              </FormControl>
              <FormControl
                fullWidth
                margin="normal"
                error={props.error.password ? true : false}
              >
                <InputLabel>Mật khẩu</InputLabel>
                <Input
                  type="password"
                  value={login.password}
                  name="password"
                  onChange={handleOnChange("password")}
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
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    variant="body2"
                    onClick={() => {
                      props.history.push("/signup");
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5} />
            </form>
          </div>
        </Grid>
      </Grid>
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
