import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

// child of BurgerBuilder
const burger = props => {
  // This is for the key. You use it instead of index.
  let keyCount = 0;

  const ingredients = [<BurgerIngredient type="bread-top" key="bread-top" />];

  //So you iterate over the ingredients obj of the state

  for (let key in props.ingredients) {
    // Then you get the value of each property
    // and you push as many BurgerIngredients as the value

    for (let i = 0; i < props.ingredients[key]; i++) {
      ingredients.push(<BurgerIngredient type={key} key={keyCount++} />);
    }
  }

  ingredients.push(<BurgerIngredient type="bread-bottom" key="bread-bottom" />);

  return <div className={classes.Burger}>{ingredients}</div>;
};

export default burger;
