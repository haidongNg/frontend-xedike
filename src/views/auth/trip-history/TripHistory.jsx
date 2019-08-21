import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getTripHistory } from "../../../store/actions/user";
import {
  Container,
  Grid,
  Toolbar,
  Table,
  TableBody,
  Typography
} from "@material-ui/core";
import TableRows from "../../../components/table-row/TableRows";

export class TripHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripH: [],
    };
  }
  componentDidMount() {
    this.props.getTripHistory(data => {
      this.setState({ tripH: data });
    });
  }

  render() {
    return (
      <Container component="main" fixed>
        <Grid>
          <Grid item xs={12}>
            <Toolbar>
              <Typography variant="h6">Lịch sử hành trình</Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={12}>
            <Table>
              <TableBody>
                {this.state.tripH.map((data, index) => {
                  if (data.trip.isFinished)
                    return (
                      <TableRows
                        key={index}
                        index={index}
                        data={data}
                        hidden={false}
                      />
                    );
                })}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default connect(
  null,
  { getTripHistory }
)(TripHistory);
