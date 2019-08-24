import React, { Component } from "react";
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
      tripH: []
    };
  }
  componentDidMount() {
    this.props.getTripHistory();
  }

  renderTable = () => {
    return this.props.listTripH.map((data, index) => {
      if (data.trip.isFinished)
        return (
          <TableRows key={index} index={index} data={data} hidden={false} />
        );
    });
  };

  render() {
    return (
      <Container component="main" fixed style={{minHeight: "65vh"}}>
        <Grid>
          <Grid item xs={12}>
            <Toolbar>
              <Typography variant="h6">Lịch sử hành trình</Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={12}>
            <Table>
              <TableBody>{this.renderTable()}</TableBody>
            </Table>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  listTripH: state.listHistory
});

export default connect(
  mapStateToProps,
  { getTripHistory }
)(TripHistory);
