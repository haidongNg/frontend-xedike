import React, { Fragment } from "react";

const BodyThree = () => {
  return (
    <Fragment>
      <section className="hero is-warning is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-desktop">
              <div className="column">
                <h1 className="title is-block">Bắt đầu chuyến xe của bạn</h1>
                <p className="subtitle is-6">
                  Là người sẽ mang những chuyến xe cũng như những trải nghiệm
                  cho Khách hàng. Các tài xế luôn là những người hiểu rõ Khách
                  hàng cần những gì là tốt nhất. Tất nhiên, chúng tôi có những
                  Quy định cụ thể để đảm bảo lợi ích lớn nhất cho tất cả các
                  bên.
                </p>
              </div>
              <div className="column">
                <figure className="image">
                  <img src="./images/hugo-navigation-support-min.png" alt="" />
                </figure>
              </div>
            </div>

            <div className="columns is-desktop">
              <div className="column">
                <figure className="image">
                  <img src="./images/hugo-location-access-min.png" alt="" />
                </figure>
              </div>
              <div className="column">
                <h1 className="title is-block">Chọn chuyến đi mà bạn muốn</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BodyThree;
