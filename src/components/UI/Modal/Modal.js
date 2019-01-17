import React from "react";
import classes from "./Modal.module.css";

// child of BurgerBuilder
const modal = props => {
  return <div className={classes.Modal}>{props.children}</div>;
};

export default modal;
