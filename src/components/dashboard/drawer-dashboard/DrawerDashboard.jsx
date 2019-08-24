import React from "react";
import clsx from "clsx";
import { connect } from 'react-redux';

import {
  Drawer,
  List,
  Divider,
  IconButton,
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import ListItems from "../../list-items/ListItems";
const DrawerDashboard = ({ open, handleDrawerClose, classes, auth }) => {

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>
          <ListItems auth={auth}/>
      </List>
      <Divider />
      <List />
    </Drawer>
  );
};
const mapStateToProps = (state) => ({
    auth: state.auth
  })
export default connect(mapStateToProps, null)(DrawerDashboard);
