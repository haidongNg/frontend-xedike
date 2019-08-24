import React from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Menu, ExitToApp } from "@material-ui/icons";
import { logout } from "../../../store/actions/auth";

const HeaderDashboard = ({ handleDrawerOpen, open, classes, logout }) => {
  const handleLogout = () => {
    logout();
  };
  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <Menu />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Dashboard
        </Typography>
        <IconButton color="inherit" onClick={handleLogout}>
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default connect(
  null,
  { logout }
)(HeaderDashboard);
