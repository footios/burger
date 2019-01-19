import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Eject from "../../../hoc/Eject";

// child of layout
const sideDrawer = props => {
  return (
    <Eject>
      <div className={classes.showBackdrop}>
        <Backdrop show={props.show} clicked={props.sideDrawerClosed} />
      </div>
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Eject>
  );
};

export default sideDrawer;
