import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {

  let ingredientsState = Object.values(props.less);

  console.log("ingredientsState ", ingredientsState);



  let buildControl = controls.map(ctrl => {
    let component = null;

    // Here I iterate through the array of ingredients values,
    // and if the value is 0, then I return a component without
    // the 'removed' attribute. So it's disabled
    // Other wise a full functional button gets returned.
    for (let i = 0; ingredientsState.length < i; i++) {
      if (ingredientsState[i] === 0) {
        component = (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
          />
        );
      } else if (ingredientsState[i] > 0) {
        component = (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
          />
        );
      }
    }
    return component;
  };
  
  return <div className={classes.BuildControls}>{buildControl}</div>;
};

export default buildControls;
