import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <AppBar position="sticky" color="inherit">
          <Toolbar>
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img
                  src="/images/img_logo_footer-min.png"
                  style={{ width: 112, height: 28 }}
                  alt=""
                />
              </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start" />
              <div className="navbar-end">
                <div className="navbar-item">
                  <Button>Danh sách chuyến đi</Button>
                  <Button>Đăng nhập</Button>
                  <Button>Đăng kí</Button>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </nav>
    </Fragment>
  );
};

export default Header;
