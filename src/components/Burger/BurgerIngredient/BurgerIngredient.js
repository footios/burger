import React, { Component } from "react";
import classes from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";
import ingConfig from "./BurgerIngredientConfig";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    // So here we need to build the ingredient, by finding its type
    // So you create the match array, by extracting the base of the burger
    // plus the addable ingredients. Then you find the chosen ingredients,
    // by comparing all the ingredients and the chosen one, via type.
    let match = [...ingConfig.base, ...ingConfig.addable].find(
      ing => ing.type === this.props.type
    );
    console.log("match", match);
    // So if there is an array of objects...
    if (match) {
      let children = null;
      if (match.children instanceof Array) {
        //console.log("match.children", match.children);
        // Here with match.children we get the
        // children: [classes.Seeds1, classes.Seeds2] array
        // of the BurgerIngredientConfig -> base -> bread-top -> children.
        console.log("...match.children ", ...match.children);
        children = [
          // Then you get the array of children with the spread operator,
          // and then you use the match array (of objects)
          // where you access the type property, to give the element a key (plus the index).
          // As for the stylling you assign the elements themselves
          // which are 'classes.Seeds1, classes.Seeds2'
          // and are corresponding to the CSS Modules classes.

          ...match.children.map((child, i) => {
            return <div key={match.type + "_" + i} className={child} />;
          })
        ];
      }
      console.log("match.className ", match.className);
      console.log("children ", children);
      // Lastly you assign to the ingredient a div with match.className,
      // which is the actuall ingredient, build up with CSS Modules.
      // ('match' is the found object and 'className' is one of its properties...)
      // plus the children which are the seeds for the bread-top.
      // Thank you!
      ingredient = <div className={match.className}>{children}</div>;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
