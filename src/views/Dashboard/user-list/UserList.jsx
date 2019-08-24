import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  Grid,
  Paper,
  Avatar,
  withStyles,
  TablePagination
} from "@material-ui/core";
import { getListUser } from "../../../store/actions/user";
import TablePaginationActions from "../../../components/table-pagination-actions/TablePaginationActions";
const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  }
});
export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      page: 0,
      rowsPerPage: 5
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) return this.props.history.push("/");
    this.props.getListUser();
  }

  renderUsers = () => {
    return this.props.listUser
      .slice(
        this.state.page * this.state.rowsPerPage,
        this.state.page * this.state.rowsPerPage + this.state.rowsPerPage
      )
      .map((user, index) => (
        <TableRow key={index}>
          <TableCell>
            <h6 className="title is-6">{index + 1}</h6>
          </TableCell>
          <TableCell>
            <Avatar
              src={user.avatar && `http://localhost:5000/${user.avatar}`}
            />
          </TableCell>
          <TableCell>{user.fullName}</TableCell>
          <TableCell>
            {" "}
            {moment(user.dateOfBirth).format("DD-MM-YYYY")}
          </TableCell>
          <TableCell>{user.gender}</TableCell>
          <TableCell>
            <h6 className="title is-6">{user.userType}</h6>
          </TableCell>
        </TableRow>
      ));
  };

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
    this.setState({ page: 0 });
  };
  render() {
    const { classes } = this.props;
    const emptyRows =
      this.state.rowsPerPage -
      Math.min(
        this.state.rowsPerPage,
        this.props.listUser.length - this.state.page * this.state.rowsPerPage
      );
    return (
      <Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Table>
                <TableHead />
                <TableBody>
                  {this.renderUsers()}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 48 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      colSpan={6}
                      count={this.props.listUser.length}
                      rowsPerPage={this.state.rowsPerPage}
                      page={this.state.page}
                      SelectProps={{
                        inputProps: { "aria-label": "rows per page" },
                        native: true
                      }}
                      onChangePage={this.handleChangePage}
                      onChangeRowsPerPage={this.handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  listUser: state.listUser
});

export default connect(
  mapStateToProps,
  { getListUser }
)(withStyles(styles)(UserList));
