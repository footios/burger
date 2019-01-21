import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "./Menu/Menu";
import SideDrawerContext from "../../Layout/SideDrawerContext/SideDrawerContext";

// child of Layout
const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <SideDrawerContext.Provider
        value={{ toggleSideDrawer: props.toggleSideDrawer }}
      >
        <Menu />
      </SideDrawerContext.Provider>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
