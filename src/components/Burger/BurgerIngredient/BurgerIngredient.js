import React, { Component } from "react";
import classes from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";
import ingConfig from "./BurgerIngredientConfig";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    // So here you create the match array, by extracting the base of the burger
    // plus the addable ingredients. Then you find the chosen ingredients,
    // by comparing all the ingredients and the chosen on, via type.
    let match = [...ingConfig.base, ...ingConfig.addable].find(
      ing => ing.type === this.props.type
    );
    console.log("match", match);
    // So if there is an array of objects...
    if (match) {
      let children = null;
      if (match.children instanceof Array) {
        console.log("match.children", match.children);
        // Here with match.children we get the
        // children: [classes.Seeds1, classes.Seeds2] array
        // of the BurgerIngredientConfig, base, bread-top.
        children = [
          // you get the array with the spread operator, then
          // you use the match array (of objects)
          // where you access the type property, to give the element a key (plus the index).
          // As for the stylling you assign the elements themselvs
          // which are classes.Seeds1, classes.Seeds2
          // and are corresponding to the CSS Modules classes.
          ...match.children.map((child, i) => {
            return <div key={match.type + "_" + i} className={child} />;
          })
        ];
      }
      console.log("match.className ", match.className);
      console.log("children ", children);
      // Lastly you assign to the ingredient a div with match.className,
      // wich is the actuall ingredient,
      // plus the children wich are the seeds for the bread-top.
      // Thank you!
      ingredient = <div className={match.className}>{children}</div>;
    }

    return ingredient;
  }
}

// switch (this.props.type) {
//   case "bread-bottom":
//     ingredient = <div className={classes.BreadBottom} />;
//     break;
//   case "bread-top":
//     ingredient = (
//       <div className={classes.BreadTop}>
//         <div className={classes.Seeds1} />
//         <div className={classes.Seeds2} />
//       </div>
//     );
//     break;
//   case "meat":
//     ingredient = <div className={classes.Meat} />;
//     break;
//   case "salad":
//     ingredient = <div className={classes.Salad} />;
//     break;
//   case "cheese":
//     ingredient = <div className={classes.Cheese} />;
//     break;
//   case "bacon":
//     ingredient = <div className={classes.Bacon} />;
//     break;
//   default:
//     ingredient = null;
// }
// return ingredient;
//   }
// }

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
