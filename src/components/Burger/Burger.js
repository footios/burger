import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    // transform the igKey, string value, into an array
    // with as many elements as the value of the igKey
    return [...Array(props.ingredients[igKey])].map((_, index) => (
      <BurgerIngredient key={igKey + index} type={igKey} />
    ));
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
