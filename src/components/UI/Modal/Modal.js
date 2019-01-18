import React from "react";
import classes from "./Modal.module.css";
import Eject from "../../../hoc/Eject";
import Backdrop from "../Backdrop/Backdrop";

// child of BurgerBuilder
const modal = props => {
  return (
    <Eject>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Eject>
  );
};

export default modal;
