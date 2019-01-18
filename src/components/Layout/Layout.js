import React from "react";
import Eject from "../../hoc/Eject";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

// Child of App
const layout = props => {
  return (
    <Eject>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Eject>
  );
};

export default layout;
