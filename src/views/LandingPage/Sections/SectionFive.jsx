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
              <div className="level-item">
                {/* <div className="columns">
                  <div className="column">
                    <p className="title">677</p>
                    <p>Hàng khách</p>
                    <p>
                      Hàng nghìn lượt khách tin tưởng chúng tôi để tìm những
                      chuyến xe với chất lượng tốt nhất.
                    </p>
                  </div>
                  <div className="column">
                    <p className="title">476</p>
                    <p>Tài xế</p>
                    <p>
                      Hệ thống của chúng tôi kết nối hàng trăm tài xế sẵn sàng
                      phục vụ nhu cầu đi lại mỗi ngày.
                    </p>
                  </div>
                </div> */}
              </div>
              {/* <div className="level-item">
                <div className="columns">
                  <div className="column">
                    <p className="title">677</p>
                    <p>Hàng khách</p>
                    <p>
                      Hàng nghìn lượt khách tin tưởng chúng tôi để tìm những
                      chuyến xe với chất lượng tốt nhất.
                    </p>
                  </div>
                  <div className="column">
                    <p className="title">4385.32</p>
                    <p>Khí CO2 được giảm (kg)</p>
                    <p>
                      Chúng ta đã góp phần làm giảm lượng khí CO2 trung bình mỗi
                      ngày. Trái Đất sẽ rất biết ơn chúng ta về điều này.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SectionFive;
