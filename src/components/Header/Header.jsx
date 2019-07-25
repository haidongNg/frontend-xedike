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
//
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
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

const Header = props => {
  const classes = useStyles();

  const handleLogout = () => {
    props.logout();
  }
  const renderUseAnonymous = (
    <Fragment>
      <Button>
        <Link to="/signin">Đăng nhập</Link>
      </Button>
      <Button>
        <Link to="/signup">Đăng kí</Link>
      </Button>
    </Fragment>
  );
  const buttonCreateTrips = (
    <Fragment>
      <Button>
        <Link to="/signin">Tạo chuyến đi</Link>
      </Button>
    </Fragment>
  );
  const renderUser = (
    <Fragment>
      <Button>
        <Link to="/profile">Thông tin tài khoản</Link>
      </Button>
      <Button>
        <Link to="/" onClick={handleLogout} >Logout</Link>
      </Button>
    </Fragment>
  );
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
            {props.secure.profile.userType === "driver"
              ? buttonCreateTrips
              : ""}
            {props.secure.isAuthenticated ? renderUser : renderUseAnonymous}
          </nav>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  secure: state.auth
});

export default connect(
  mapStateToProps,
  {logout}
)(Header);
