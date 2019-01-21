import React, { Component } from "react";
import classes from "./Menu.module.css";
import SideDrawerContext from "../../../Layout/SideDrawerContext/SideDrawerContext";

// child of Toolbar
class Menu extends Component {
  static contextType = SideDrawerContext;

  render() {
    return (
      <button className={classes.Menu} onClick={this.context.toggleSideDrawer}>
        MENU
      </button>
    );
  }
}

export default Menu;
