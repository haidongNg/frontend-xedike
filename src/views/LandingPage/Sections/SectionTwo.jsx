import React, { Fragment } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const SectionTwo = () => {
  return (
    <Fragment>
      <section className="hero is-primary is-bold is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-desktop">
              <div className="tile">
                <p className="title">Danh sách chuyến đi gần đây</p>
              </div>
            </div>
            <div className="level is-mobile" style={{ overflowX: "auto" }}>
              <div className="level-item">
                <Table>
                  <TableHead />
                  <TableBody>
                    <TableRow>
                      <TableCell>Form - To</TableCell>
                      <TableCell align="right">Xe</TableCell>
                      <TableCell align="right">Driver</TableCell>
                      <TableCell align="right">Gia tien</TableCell>
                      <TableCell align="right">
                        <Button variant="contained">Xem chuyến đi</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Form - To</TableCell>
                      <TableCell align="right">Xe</TableCell>
                      <TableCell align="right">Driver</TableCell>
                      <TableCell align="right">Gia tien</TableCell>
                      <TableCell align="right">
                        <Button variant="contained">Xem chuyến đi</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Form - To</TableCell>
                      <TableCell align="right">Xe</TableCell>
                      <TableCell align="right">Driver</TableCell>
                      <TableCell align="right">Gia tien</TableCell>
                      <TableCell align="right">
                        <Button variant="contained">Xem chuyến đi</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            <div>
              <Button>
                <Link to="/danhsachchuyendi">Xem thêm</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SectionTwo;
