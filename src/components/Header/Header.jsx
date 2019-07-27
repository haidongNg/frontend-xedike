import React, { Fragment } from "react";
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
    <Link to="/taochuyendi">
      <Button className={classes.signOutButton}>Tạo chuyến đi</Button>
    </Link>
  );

  const renderUser = (
    <Fragment>
      <Link to="/thongtintaikhoan">
        <Button className={classes.signOutButton}>Thông tin tài khoản</Button>
      </Link>
      {props.auth.profile.userType === "driver" ? renderButtonDrive : null}
      <Link to="/">
        <Button className={classes.signOutButton} onClick={handleLogout}>
          Đăng xuất
        </Button>
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      <AppBar className={classes.root} position="relative">
        <Toolbar>
          <Link to="/">
            <img alt="Logo" src="/images/logo.png" className={classes.img} />
          </Link>
          <div className={classes.flexGrow} />
          <Hidden mdDown>
            <Link to="/danhsachchuyendi">
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
