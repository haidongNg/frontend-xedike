import React, { Fragment } from "react";
import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import SectionFour from "./Sections/SectionFour";
import SectionFive from "./Sections/SectionFive";
const LandingPage = () => {
  return (
    <Fragment>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </Fragment>
  );
};

export default LandingPage;
