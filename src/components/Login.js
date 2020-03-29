import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  CssBaseline,
  Button,
  Paper,
  Typography,
  FormControl,
  User
} from "../includes";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { connect } from "react-redux";
import {
  userNameChange,
  userPasswordChange,
  userLoginSubmit
} from "../includes/actions";
import Snackbar from "./Snackbar";
const styles = theme => ({
  layout: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: "-25px"
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    background: 'linear-gradient(to right, #430089, #c44dff)',
  }
});

class Login extends React.Component {
  isLogin() {
    if (User.isLogin()) {
      this.props.history.push("/dashboard");
    }
  }
  componentDidUpdate() {
    this.isLogin();
  }
  componentWillMount() {
    this.isLogin();
  }
  handleChange = name => event => {
    if (name === "username") {
      this.props.onUserNameChange(event.target.value);
    } else if (name === "password") {
      this.props.onUserPasswordChange(event.target.value);
    }
  };
  onSubmit(event) {
    event.preventDefault();
    this.props.onLoginSubmit(
      this.props.login.username,
      this.props.login.password
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Snackbar {...this.props.alert} />
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h5">Login Panel</Typography>
            <ValidatorForm
              className={classes.form}
              onSubmit={this.onSubmit.bind(this)}
              onError={errors => console.log(errors)}
            >
              <FormControl margin="normal" required fullWidth>
                <TextValidator
                  label="Username"
                  validators={["required"]}
                  name="username"
                  id="username"
                  value={this.props.login.username}
                  errorMessages={["Please Enter Username"]}
                  onChange={this.handleChange("username")}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextValidator
                  label="Password"
                  name="password"
                  type="password"
                  validators={["required"]}
                  errorMessages={["Please Enter Password"]}
                  id="password"
                  value={this.props.login.password}
                  autoComplete="current-password"
                  onChange={this.handleChange("password")}
                />
              </FormControl>

              <Button
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                type="submit"
              >
                LOGIN
              </Button>
            </ValidatorForm>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  onUserNameChange: userNameChange,
  onUserPasswordChange: userPasswordChange,
  onLoginSubmit: userLoginSubmit
};
const stylesLogin = withStyles(styles)(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(stylesLogin);
