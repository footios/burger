import React, { Component } from "react";
import classes from "./Menu.module.css";
import SideDrawerContext from "../../../Layout/SideDrawerContext/SideDrawerContext";

// child of Toolbar
class Menu extends Component {
  static contextType = SideDrawerContext;

  render() {
    return (
      <div className={classes.Menu}>
        <button onClick={this.context.toggleSideDrawer}>MENU</button>
      </div>
    );
  }
}

export default Menu;
