import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
import { Dashboard, Group, DirectionsCar } from "@material-ui/icons";
import { Link } from "react-router-dom";

const ListItems = ({auth}) => {
  return (
    <div>
    <ListItem button>
        <ListItemAvatar>
          <Avatar>{auth.profile.userType}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={auth.profile.fullName} />
      </ListItem>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/user-list">
      <ListItem button>
        <ListItemIcon>
          <Group />
        </ListItemIcon>
        <ListItemText primary="Danh sách User" />
      </ListItem>
    </Link>
    <Link to="/trip-list">
      <ListItem button>
        <ListItemIcon>
          <DirectionsCar />
        </ListItemIcon>
        <ListItemText primary="Danh sách chuyến đi" />
      </ListItem>
    </Link>
  </div>
  )
}

export default ListItems;
