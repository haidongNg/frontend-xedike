import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import { Container, withStyles } from "@material-ui/core";
// component
import LandingPage from "./views/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// auth
import Signup from "./views/auth/signup/Signup";
import Signin from "./views/auth/signin/Signin";
import ListTrips from "./views/page-list-trips/ListTrips";
import Profile from "./views/auth/profile/Profile";
import PageNotFound from "./views/page-not-found/PageNotFound";
//
import { setCurrentUser, logout } from "./store/actions/auth";
import setHeaders from "./shared/helpers/setHeader";
// npm
// import { SnackbarProvider } from "notistack";
import BookTrip from "./views/page-list-trips/book-trip/BookTrip";
import TripHistory from "./views/auth/trip-history/TripHistory";
import DashboardDriver from "./views/auth/dashboard-driver/DashboardDriver";
import DashboardPassenger from "./views/auth/dashboard-passenger/DashboardPassenger";
import Dashboard from "./views/Dashboard/Dashboard";
import UserList from "./views/Dashboard/user-list/UserList";
import TripList from "./views/Dashboard/trip-list/TripList";
import HeaderDashboard from "./components/dashboard/header-dashboard/HeaderDashboard";
import DrawerDashboard from "./components/dashboard/drawer-dashboard/DrawerDashboard";
import RouteGuard from "./components/guard/RouteGuard";

const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
});
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  componentDidMount() {
    // auto login
    const token = localStorage.getItem("token");
    const fingerprint = localStorage.getItem("fingerprint");
    if (!token) return;
    const decode = jwtDecode(token);
    this.props.setCurrentUser(decode);
    setHeaders(token, fingerprint);
    // logout: Neu Date.now > exp (token)
    if (Date.now() / 1000 > decode.exp) {
      this.props.logout();
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        {this.props.auth.isAuthenticated &&
        this.props.auth.profile.userType === "admin" ? (
          <div style={{ display: "flex" }}>
            <HeaderDashboard
              handleDrawerOpen={this.handleDrawerOpen}
              open={this.state.open}
              classes={classes}
            />
            <DrawerDashboard
              open={this.state.open}
              classes={classes}
              handleDrawerClose={this.handleDrawerClose}
            />
            <main className={classes.content}>
              <div className={classes.appBarSpacer}>
                <Container maxWidth="lg" className={classes.container}>
                  <div style={{ marginTop: "50px" }} />
                  <Switch>
                    <RouteGuard path="/user-list" component={UserList} />
                    <RouteGuard path="/trip-list" component={TripList} />
                    <RouteGuard path="/" component={Dashboard}  />
                    {/* <Route path="/" component={Dashboard} exact />
                    <Route path="/user-list" component={UserList} />
                    <Route path="/trip-list" component={TripList} /> */}
                    
                  </Switch>
                </Container>
              </div>
            </main>
          </div>
        ) : (
          <Fragment>
            <Header />
            <Switch>
              <Route path="/" component={LandingPage} exact />

              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/list-trips" component={ListTrips} />
              <Route path="/book-trip/:id" component={BookTrip} />
              {/* <LoginGuard path="/profile" component={Profile} /> */}
              <Route
                path="/profile"
                component={
                  this.props.auth.isAuthenticated &&
                  this.props.auth.profile.userType === "passenger"
                    ? Profile
                    : PageNotFound
                }
              />
              <Route
                path="/profile-driver/:id"
                component={
                  this.props.auth.isAuthenticated &&
                  this.props.auth.profile.userType === "driver"
                    ? Profile
                    : PageNotFound
                }
              />

              <Route
                path={"/trip-history"}
                component={
                  this.props.auth.isAuthenticated ? TripHistory : PageNotFound
                }
              />
              <Route
                path="/dashboard-passenger/:id"
                component={
                  this.props.auth.isAuthenticated &&
                  this.props.auth.profile.userType === "passenger"
                    ? DashboardPassenger
                    : PageNotFound
                }
              />
              <Route
                path="/dashboard-driver/:id"
                component={
                  this.props.auth.isAuthenticated &&
                  this.props.auth.profile.userType === "driver"
                    ? DashboardDriver
                    : PageNotFound
                }
              />
              <Redirect to="/" />
            </Switch>

            <Footer />
          </Fragment>
        )}
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { setCurrentUser, logout }
)(withStyles(styles)(App));
