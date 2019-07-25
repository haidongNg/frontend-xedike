import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
// Material-UI
import {
  Container,
  Grid,
  Avatar,
  withStyles,
  Icon,
  Button,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  RadioGroup,
  Radio,
  FormLabel
} from "@material-ui/core";

//
import { getProfile } from "../../../store/actions/auth";

const styles = theme => ({
  avatar: {
    display: "block",
    marginTop: theme.spacing(3),
    marginLeft: "auto",
    marginRight: "auto",
    width: 150,
    height: 150
  },
  button: {
    margin: theme.spacing(1)
  },
  rightIconUpLoad: {
    marginLeft: theme.spacing(1)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  wrapperButton: {
    margin: theme.spacing(1),
    position: "relative"
  },
  input: {
    display: "none"
  }
});

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullName: "",
      phone: "",
      gender: "",
      dateOfBirth: ""
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) return;
    const { profile } = this.props.secure;
    this.props.getProfile(profile.id, user => {
      this.setState(user);
    });
  }

  handleOnChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Container component="main" maxWidth="md">
          <Grid container justify="center" alignItems="center" spacing={5}>
            <Grid item xs={12} sm={3}>
              <Avatar
                alt="Avatar User"
                src="./images/user-ic-min.png"
                className={classes.avatar}
              />
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  fullWidth
                  variant="outlined"
                  component="span"
                  className={classes.button}
                >
                  Upload
                  <Icon className={classes.rightIconUpLoad}>cloud_upload</Icon>
                </Button>
              </label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <form className={classes.form}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Email</InputLabel>
                  <Input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleOnChange("email")}
                  />
                  {/* <FormHelperText>{props.error.email}</FormHelperText> */}
                </FormControl>

                <FormControl fullWidth margin="normal">
                  <InputLabel>Họ và Tên</InputLabel>
                  <Input
                    type="text"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.handleOnChange("fullName")}
                  />
                  {/* <FormHelperText>{props.error.fullName}</FormHelperText> */}
                </FormControl>
                <FormControl fullWidth margin="normal" disabled>
                  <InputLabel>User Type</InputLabel>
                  <Input name="userType" value={this.state.userType} />
                </FormControl>
                <FormControl component="fieldset" fullWidth margin="normal">
                  <FormLabel component="legend">Giới tính</FormLabel>
                  <RadioGroup
                    aria-label="Gender"
                    row
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleOnChange("gender")}
                  >
                    <FormControlLabel
                      value="nu"
                      control={<Radio />}
                      label="Nữ"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="nam"
                      control={<Radio />}
                      label="Nam"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                  {/* <FormHelperText>{props.error.gender}</FormHelperText> */}
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Số điện thoại</InputLabel>
                  <Input
                    type="number"
                    value={this.state.phone}
                    name="phone"
                    onChange={this.handleOnChange("phone")}
                  />
                  {/* <FormHelperText>{props.error.phone}</FormHelperText> */}
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <FormLabel component="legend">Ngày sinh</FormLabel>
                  <Input
                    type="date"
                    value={this.state.dateOfBirth}
                    name="dateOfBirth"
                    onChange={this.handleOnChange("dateOfBirth")}
                  />
                  {/* <FormHelperText>{props.error.dateOfBirth}</FormHelperText> */}
                </FormControl>
                <div className={classes.wrapperButton}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                  >
                    Cập nhật
                  </Button>
                </div>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  secure: state.auth
});

export default connect(
  mapStateToProps,
  { getProfile }
)(withStyles(styles)(Profile));
