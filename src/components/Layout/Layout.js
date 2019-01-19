import React from "react";
import Eject from "../../hoc/Eject";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

// Child of App
const layout = props => {
  return (
    <Eject>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </Eject>
  );
};

export default layout;
