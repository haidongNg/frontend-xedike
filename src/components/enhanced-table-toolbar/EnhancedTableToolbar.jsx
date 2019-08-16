import React from "react";
import clsx from "clsx";
import {
  Toolbar,
  InputBase,
  Grid,
} from "@material-ui/core";
import { lighten, makeStyles, fade } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";
import SelectCustom from "../select-custom/SelectCustom";
const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: "0 0 auto"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:h0ver": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  formControl: {
    margin: theme.spacing(1)
  }
}));

const EnhancedTableToolbar = ({ search, handleSearch }) => {
  const classes = useToolbarStyles();
  return (
    <Toolbar className={clsx(classes.root)}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={4}>
          <SelectCustom
            variant="standard"
            margin="normal"
            name="from"
            value={search.from}
            label="Điểm đi"
            onChangeSelect={handleSearch}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <SelectCustom
            variant="standard"
            margin="normal"
            name="to"
            label="Điểm đến"
            value={search.to}
            onChangeSelect={handleSearch}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              name="filter"
              value={search.filter || ""}
              onChange={handleSearch}
            />
          </div>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
