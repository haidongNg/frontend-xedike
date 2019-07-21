import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// Material UI
import {
  AppBar,
  Toolbar,
  Button,
  CssBaseline,
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />

      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.toolbarTitle}>
            <img
              src="/images/img_logo_footer-min.png"
              style={{ width: 112, height: 28 }}
              alt=""
            />
          </Link>
          <nav>
            <Button>
              <Link to="/danhsachchuyendi">Danh sách chuyến đi</Link>
            </Button>
            <Button>
              <Link to="/signin">Đăng nhập</Link>
            </Button>
            <Button>
              <Link to="/signup">Đăng kí</Link>
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
      {/* <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Link to="/">
            <img
              src="/images/img_logo_footer-min.png"
              style={{ width: 112, height: 28 }}
              alt=""
            />
          </Link>
          <div>
          <Button>
            <Link to="/danhsachchuyendi">Danh sách chuyến đi</Link>
          </Button>
          <Button>
            <Link to="/signin">Đăng nhập</Link>
          </Button>
          <Button>
            <Link to="/signup">Đăng kí</Link>
          </Button>
          </div>
          
        </Toolbar>
      </AppBar> */}
    </Fragment>
  );
};

export default Header;
