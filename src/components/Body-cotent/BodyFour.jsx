import React, { Fragment } from "react";

const BodyFour = () => {
  return (
    <Fragment>
      <section className="hero is-danger is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="level is-desktop">
              <div className="level-item has-text-centered">
                <div>
                  <h1 className="title">Tại sao sử dụng XEDIKE.VN</h1>
                  <p>Dưới đây là một trong những lí do cho việc lựa chọn.</p>
                </div>
              </div>
            </div>
            <div className="columns is-desktop has-text-centered">
              <div className="column">
                <div>
                  <figure className="image is-64x64 is-inline-block">
                    <img src="./images/img_trust-min.png" alt="" />
                  </figure>
                  <h5 className="title has-text-centered">Tin tưởng</h5>
                  <p>
                    Bạn sẽ biết tài xế và bạn đồng hành của bạn là ai. Điều đó
                    giúp bạn có những trải nghiệm tốt hơn trên hành trình của
                    mình.
                  </p>
                </div>
              </div>
              <div className="column has-text-centered">
                <figure className="image is-64x64 is-inline-block">
                  <img src="./images/img_safe-min.png" alt="" />
                </figure>
                <h5 className="title has-text-centered">Chủ động</h5>
                <p>
                  Thời gian chờ, số ghế trống, giá cả, chất lượng tài xế, các
                  đánh giá, … tất cả sẽ được hiển thị rõ ràng để bạn yên tâm đặt
                  chuyến đi.
                </p>
              </div>
              <div className="column has-text-centered">
                <figure className="image is-64x64 is-inline-block">
                  <img src="./images/img_love_car-min.png" alt="" />
                </figure>
                <h5 className="title has-text-centered">Môi trường</h5>
                <p>
                  Mỗi 2 người đi chung một xe tương đương với việc trồng 4 cây
                  xanh cho việc hấp thụ khí C02 trong vòng 1 năm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BodyFour;
