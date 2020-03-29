import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  classNames,
  Button,
  AppBar,
  Toolbar,
  Typography,
  NotificationsIcon,
  IconButton,
} from "../../includes";
import { drawerOpenClick, userLogout } from "../../includes/actions";

class TopBarMenu extends Component {
  onUserLogout() {
    this.props.userLogout();
    this.props.history.push("/");
  }
  render() {
    const { drawerOpen } = this.props.dashboard;
    const { user, classes } = this.props;

    return (
      <Fragment>
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            drawerOpen && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!drawerOpen} className={classes.toolbar}>
            <Typography
              component="h1"
              variant="title"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
                <NotificationsIcon />
            </IconButton>
            <Typography color="inherit">{user}</Typography>
            <Button
              variant="contained"
              size="small"
              className={classes.logoutButton}
              onClick={this.onUserLogout.bind(this)}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  drawerOpenClick: drawerOpenClick,
  userLogout: userLogout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarMenu);
