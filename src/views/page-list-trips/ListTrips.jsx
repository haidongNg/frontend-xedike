import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { getTrips } from "../../store/actions/trips";

//
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  withStyles,
  TableFooter
} from "@material-ui/core";
import EnhancedTableToolbar from "../../components/enhanced-table-toolbar/EnhancedTableToolbar";
import TableRows from "../../components/table-row/TableRows";
import TablePaginationActions from "../../components/table-pagination-actions/TablePaginationActions";
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

export class ListTrips extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 0,
      rowsPerPage: 5,
      search: {
        filter: "",
        from: "",
        to: ""
      }
    };
  }

  UNSAFE_componentWillMount() {
    this.props.getTrips();
  }

  handleOnClickRoute = id => {
    this.props.history.push(`/book-trip/${id}`);
  };

  handleSearch = event => {
    this.setState({
      search: { ...this.state.search, [event.target.name]: event.target.value }
    });
  };

  renderListTables = () => {
    let filtered = this.props.listTrip.filter(data => {
      return (
        (data.trip.locationFrom || data.trip.locationTo)
          .toLowerCase()
          .indexOf(
            (
              this.state.search.filter ||
              this.state.search.from ||
              this.state.search.to
            ).toLowerCase()
          ) !== -1
      );
    });

    return filtered
      .slice(
        this.state.page * this.state.rowsPerPage,
        this.state.page * this.state.rowsPerPage + this.state.rowsPerPage
      )
      .map((data, index) => (
        <TableRows
          hidden={true}
          key={index}
          index={index}
          data={data}
          handleOnClickRoute={this.handleOnClickRoute}
        />
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
        this.props.listTrip.length - this.state.page * this.state.rowsPerPage
      );
    return (
      <Fragment>
        <section className="hero is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Danh sách chuyến đi</h1>
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <EnhancedTableToolbar
                    className={classes}
                    search={this.state.search}
                    handleSearch={this.handleSearch}
                  />
                  <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Điểm đi</TableCell>
                          <TableCell>Điểm đến</TableCell>
                          <TableCell align="center">Thời gian</TableCell>
                          <TableCell align="right">Xe</TableCell>
                          <TableCell align="center">Tài xế</TableCell>
                          <TableCell align="right">Giá vé</TableCell>
                          <TableCell align="center" />
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.renderListTables()}
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
                            count={this.props.listTrip.length}
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
                  </div>
                </Paper>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  secure: state.auth,
  listTrip: state.listTrip
});
export default connect(
  mapStateToProps,
  { getTrips }
)(withStyles(styles)(ListTrips));
