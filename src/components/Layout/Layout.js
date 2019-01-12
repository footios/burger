import React from "react";
import Eject from "../../hoc/Eject";
import classes from "./Layout.module.css";

const layout = props => {
  return (
    <Eject>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Eject>
  );
};

export default layout;
