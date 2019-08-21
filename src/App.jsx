import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
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
import { SnackbarProvider } from "notistack";
import BookTrip from "./views/page-list-trips/book-trip/BookTrip";
import TripHistory from "./views/auth/trip-history/TripHistory";
import DashboardDriver from "./views/auth/dashboard-driver/DashboardDriver";
import DashboardPassenger from "./views/auth/dashboard-passenger/DashboardPassenger";

export class App extends Component {
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
  render() {
    return (
      <BrowserRouter>
        <SnackbarProvider
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          preventDuplicate
        >
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
        </SnackbarProvider>
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
)(App);
