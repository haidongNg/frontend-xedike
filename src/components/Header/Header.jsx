import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
const Header = () => {
  return (
    <Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img
                  src="/images/img_logo_footer-min.png"
                  style={{ width: 112, height: 28 }}
                  alt=""
                />
              </Link>
            </div>
            <div className="navbar-menu">
              <div className="navbar-start" />
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
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
