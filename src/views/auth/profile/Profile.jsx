import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ProfileContent from "./user/ProfileContent";
import ProfileDriverContent from "./driver/ProfileDriverContent";
import { withStyles, Grid, Container } from "@material-ui/core";
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  details: {
    display: "flex"
  },
  avatar: {
    marginLeft: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  },
  input: {
    display: "none"
  },
  button: {
    margin: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  cardBottom: {
    marginTop: theme.spacing(2)
  }
});

export class Profile extends Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) this.props.history.push("/");
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Container className={classes.root}>
          {" "}
          <Grid container spacing={4}>
            <ProfileContent auth={this.props.auth} />
            {this.props.auth.profile.userType === "driver" ? (
              <ProfileDriverContent auth={this.props.auth} />
            ) : (
              ""
            )}
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Profile));
