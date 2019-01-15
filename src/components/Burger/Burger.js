import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

// child of BurgerBuilder
const burger = props => {
  let transformedA = Object.keys(props.ingredients).map(igKey => {
    return [Array(props.ingredients[igKey])].map((_, i) => {
      console.log("Example A", "Iteration output", i, "for", igKey);
      return "<p key=" + (igKey + i) + " type=" + igKey + ">Ingredient</p>";
    });
  });

  let transformedB = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      console.log("Example B", "Iteration output", i, "for", igKey);
      return "<p key=" + (igKey + i) + " type=" + igKey + ">Ingredient</p>";
    });
  });

  console.log("Arrays Output");
  console.log("First array :", transformedA);
  console.log("Second Array :", transformedB);
  console.log("Salad Quantity");
  console.log("First array :", transformedA[0].length);
  console.log("Second Array :", transformedB[0].length);
  console.log("Bacon Quantity");
  console.log("First array :", transformedA[1].length);
  console.log("Second Array :", transformedB[1].length);

  let arrayGroup = [];
  const arrayCreater = valuesAmount => {
    return [Array(valuesAmount)];
  };
  const arrayCreaterWithSpread = valuesAmount => {
    return [...Array(valuesAmount)];
  };

  arrayGroup[0] = arrayCreater(5);
  arrayGroup[1] = arrayCreaterWithSpread(5);
  arrayGroup[2] = arrayCreater(2);
  arrayGroup[3] = arrayCreaterWithSpread(2);

  console.log("arrayGroup :", arrayGroup);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />

      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
