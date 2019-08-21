import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// Material UI
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Hidden,
  IconButton
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
//
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import CreateTrip from "../create-trip/CreateTrip";
const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none"
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  img: {
    width: 112,
    height: 28
  }
}));

const Header = props => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleLogout = () => {
    props.logout();
  };

  const renderAnonymous = (
    <Fragment>
      <Link to="/signup">
        <Button className={classes.signOutButton}>Đăng ký</Button>
      </Link>
      <Link to="/signin">
        <Button className={classes.signOutButton}>Đăng nhập</Button>
      </Link>
    </Fragment>
  );

  const renderButtonDrive = (
    <Button className={classes.signOutButton} onClick={() => handleClickOpen()}>
      Tạo chuyến đi
    </Button>
  );

  const renderUserDriver = (
    <Fragment>
      <Link
        to={`/profile-driver/${props.auth.profile.id ||
          props.auth.profile._id}`}
      >
        <Button className={classes.signOutButton}>Thông tin tài khoản</Button>
      </Link>
      <Link
        to={`/dashboard-driver/${props.auth.profile.id ||
          props.auth.profile._id}`}
      >
        <Button>Quản lý chuyến đi</Button>
      </Link>
      <Button
        className={classes.signOutButton}
        onClick={() => handleClickOpen()}
      >
        Tạo chuyến đi
      </Button>
    </Fragment>
  );

  const renderUserPassenger = (
    <Fragment>
      <Link to={"/profile"}>
        <Button className={classes.signOutButton}>Thông tin tài khoản</Button>
      </Link>

      <Link to={"/trip-history"}>
        <Button>Lịch sử chuyến đi</Button>
      </Link>
      <Link
        to={`/dashboard-passenger/${props.auth.profile.id ||
          props.auth.profile._id}`}
      >
        <Button>Quản lý chuyến đi</Button>
      </Link>
    </Fragment>
  );
  const handleClickOpen = title => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const renderUser = (
    <Fragment>
      {props.auth.profile.userType === "driver"
        ? renderUserDriver
        : renderUserPassenger}
      <Link to="/">
        <Button className={classes.signOutButton} onClick={handleLogout}>
          Đăng xuất
        </Button>
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Link to="/">
            <img alt="Logo" src="/images/logo.png" className={classes.img} />
          </Link>
          <div className={classes.flexGrow} />
          <Hidden mdDown>
            <Link to="/list-trips">
              <Button className={classes.signOutButton}>
                Danh sách chuyến đi
              </Button>
            </Link>
            {props.auth.isAuthenticated ? renderUser : renderAnonymous}
          </Hidden>
          <Hidden lgUp>
            <IconButton
              color="inherit"
              // onClick={onSidebarOpen}
            >
              <Menu />
            </IconButton>
          </Hidden>
          <CreateTrip open={open} onClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
