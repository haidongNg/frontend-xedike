import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BodyOne from "./components/Body-cotent/BodyOne";
import BodyTwo from "./components/Body-cotent/BodyTwo";
import BodyThree from "./components/Body-cotent/BodyThree";
import BodyFour from "./components/Body-cotent/BodyFour";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BodyOne />
        <BodyTwo />
        <BodyThree />
        <BodyFour />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
