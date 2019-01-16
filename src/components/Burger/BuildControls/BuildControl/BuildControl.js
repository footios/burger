import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = props => {
  // let ingredientsState = Object.values(props.less);
  // console.log(Object.keys(props.less));
  // console.log("ingredientsState ", ingredientsState);

  // let lessButton = <button className={classes.Less}>Less</button>;

  // const nothingYet = ingredientsState.some(elem => elem === 0);

  // if (!nothingYet) {
  //   lessButton = (
  //     <button className={classes.Less} onClick={props.removed}>
  //       Less
  //     </button>
  //   );
  // }

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.removed}>
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
