import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import ingConfig from "./BurgerIngredient/BurgerIngredientConfig";

const burger = props => {
  const transformedIngredients = props.ingredients
    .filter(ing => {
      // So here you access the addable array and you find the ingredient
      // that matches the chosen ingredient.
      // Then you map the results in a BurgerIngredient element-component.
      return ingConfig.addable.find(avIng => avIng.type === ing);
    })
    .map((ing, i) => <BurgerIngredient key={ing + i} type={ing} />);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
