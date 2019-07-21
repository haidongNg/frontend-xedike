import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import jwtDecode from 'jwt-decode'
// component
import Home from "./views/home/Home";
// auth
import Signup from "./views/auth/signup/Signup";
import Signin from "./views/auth/signin/Signin";
import ListTrips from "./views/page-list-trips/ListTrips";
import Profile from "./views/auth/profile/Profile";
import PageNotFound from "./views/page-not-found/PageNotFound";

// 
import { setCurrentUser} from './store/actions/auth';
//import setHeaders from "./shared/helpers/setHeader";


export class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    if(!token) return;
    const decode = jwtDecode(token);
    this.props.setCurrentUser(decode);
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/danhsachchuyendi" component={ListTrips} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/profile"
            component={
              this.props.secure.isAuthenticated ? Profile : PageNotFound
            }
          />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  secure: state.auth
});

export default connect(
  mapStateToProps,
  {setCurrentUser}
)(App);
