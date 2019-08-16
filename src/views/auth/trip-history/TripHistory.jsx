import React, { Component } from "react";
import { Container, Grid, Toolbar } from "@material-ui/core";
export class TripHistory extends Component {
  render() {
    return (
      <Container component="main" fixed>
        <Grid>
          <Grid item xs={12}>
            <Toolbar>Lịch sử hành trình</Toolbar>
          </Grid>
          <Grid item xs={12} />
        </Grid>
      </Container>
    );
  }
}

export default TripHistory;
