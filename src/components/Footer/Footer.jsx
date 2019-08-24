import React from "react";
import { Call, Email } from "@material-ui/icons";
const Footer = () => {
  return (
    <footer className="footer" style={{position: "relative"}}>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child">
            <figure className="image">
              <img
                src="/images/img_logo_footer-min.png"
                alt=""
                style={{ width: 112, height: 28 }}
              />
            </figure>
            <div className="content is-small">
              <ul>
                <li>
                  <Call />
                  <strong>Hỗ trợ hành khách: </strong>{" "}
                  <span>0905.93.34.53</span>
                </li>
                <li>
                  <Call />
                  <strong>Hỗ trợ tài xế: </strong> <span>0905.93.34.53</span>
                </li>
                <li>
                  <Email />
                  <strong>Email: </strong> <span>cs@xedike.vn</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child">
            <div className="content is-small">
              <h1 className="title is-6 is-spaced">Thông tin</h1>
              <ul>
                <li>
                  <a href="/">Liên hệ</a>
                </li>
                <li>
                  <a href="/">Đội ngũ</a>
                </li>
                <li>
                  <a href="/">Tuyển dụng</a>
                </li>
                <li>
                  <a href="/">Những câu hỏi thường gặp</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child">
            <div className="content is-small">
              <h1 className="title is-6 is-spaced">Xe đi ké</h1>

              <ul>
                <li>
                  <a href="/">Điều khoản sử dụng</a>
                </li>
                <li>
                  <a href="/">Chính sách Bảo mật thông tin</a>
                </li>
                <li>
                  <a href="/">Quy chế sàn giao dịch</a>
                </li>
                <li>
                  <a href="/">Cơ chế giải quyết tranh chấp</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child">
            <div className="content is-small">
              <h1 className="title is-6 is-spaced">Hỗ trợ</h1>
              <ul>
                <li>
                  <a href="/">Đăng kí làm tài xế</a>
                </li>
                <li>
                  <a href="/">Đăng ký hành khách</a>
                </li>
                <li>
                  <a href="/">Hành lí thất lạc</a>
                </li>
                <li>
                  <a href="/">Điều kiện hủy</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
