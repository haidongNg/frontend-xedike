import React, { Component } from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// component
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./views/home/Home";
// auth
import Signup from "./views/auth/signup/Signup";
import Signin from "./views/auth/signin/Signin";
import ListTrips from "./views/page-list-trips/ListTrips";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          
          <Route path="/danhsachchuyendi" component={ListTrips} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
