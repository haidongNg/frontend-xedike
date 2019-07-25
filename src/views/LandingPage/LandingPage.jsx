import React, { Fragment } from "react";
import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import SectionFour from "./Sections/SectionFour";
import SectionFive from "./Sections/SectionFive";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
const LandingPage = () => {
  return (
    <Fragment>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
