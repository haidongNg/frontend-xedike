import React, { Fragment } from "react";
import BodyOne from "../../components/Body-cotent/BodyOne";
import BodyTwo from "../../components/Body-cotent/BodyTwo";
import BodyThree from "../../components/Body-cotent/BodyThree";
import BodyFour from "../../components/Body-cotent/BodyFour";
import BodyFive from "../../components/Body-cotent/BodyFive";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <BodyOne />
      <BodyTwo />
      <BodyThree />
      <BodyFour />
      <BodyFive />
      <Footer />
    </Fragment>
  );
};

export default Home;
