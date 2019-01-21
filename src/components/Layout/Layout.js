import React, { Component } from "react";
import Eject from "../../hoc/Eject";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

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
  render() {
    return (
      <Eject>
        <Toolbar />
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
