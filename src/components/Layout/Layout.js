import React, { Component } from "react";
import Eject from "../../hoc/Eject";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import SideDrawerContext from "./SideDrawerContext/SideDrawerContext";

// Child of App
class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ showSideDrawer: window.innerWidth < 500 });
    });
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  toggleSideDrawerHandler = () => {
    if (window.innerWidth < 500) {
      this.setState(prevState => {
        return {
          showSideDrawer: !prevState.showSideDrawer
        };
      });
    }
  };

  render() {
    return (
      <Eject>
        <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Eject>
    );
  }
}

export default Layout;
