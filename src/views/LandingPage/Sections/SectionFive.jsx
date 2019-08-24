import React, { Fragment } from "react";

const SectionFive = () => {
  return (
    <Fragment>
      <section className="hero is-info is-bold is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="level is-desktop">
              <div className="level-item">
                <figure className="image">
                  <img src="./images/img_mac.png" alt="" />
                </figure>
                <figure
                  className="image is-128x128"
                  style={{ zIndex: 2, position: "absolute", left: "160px" }}
                >
                  <img src="./images/img_iPad.png" alt="" />
                </figure>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SectionFive;
