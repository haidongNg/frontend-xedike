import React, { Fragment } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
const BodyOne = () => {
  return (
    <Fragment>
      <section className="hero is-info is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-desktop">
              <div className="column">
                <h1 className="title is-mobile">Bắt đầu chuyến xe của bạn</h1>
                <h1 className="title is-5 is-mobile">
                  Đã có <span id="number-user">1152</span> thành viên sử dụng
                  trên toàn quốc
                </h1>
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
                  <img src="./images/hugo-car-rental-min.png" alt="" />
                </figure>
              </div>
            </div>
            <div className="level is-desktop">
              <div className="level-item">
                <form className="columns is-desktop">
                  <div className="column">
                    <FormControl fullWidth variant="standard" margin="dense">
                      <InputLabel>Nơi đi</InputLabel>
                      <Input
                        type="text"
                        endAdornment={
                          <InputAdornment position="end">
                            <Icon>location_on</Icon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                  <div className="column">
                    <FormControl fullWidth variant="standard" margin="dense">
                      <InputLabel>Nơi đến</InputLabel>
                      <Input
                        type="text"
                        endAdornment={
                          <InputAdornment position="end">
                            <Icon>location_on</Icon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                  <div className="column">
                    <FormControl fullWidth variant="standard" margin="dense">
                      <InputLabel />
                      <Input
                        type="date"
                        defaultValue="2019-07-20"
                        endAdornment={
                          <InputAdornment position="end">
                            <Icon>date_range</Icon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                  <div className="column">
                    <FormControl fullWidth variant="standard" margin="dense">
                      <InputLabel>Số ghế</InputLabel>
                      <Input
                        type="number"
                        defaultValue={1}
                        endAdornment={
                          <InputAdornment position="end">
                            <Icon>airline_seat_legroom_extra</Icon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>

                  <div className="column" style={{ margin: "auto" }}>
                    <Button fullWidth size="medium">
                      Tìm kiếm <Icon>search</Icon>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BodyOne;
