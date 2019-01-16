import React, { Component } from "react";
import Eject from "../../hoc/Eject";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    //object of ingredients
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDiduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDiduction;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    // Here we set the value to be true/false
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    // Yet another way
    // let disabledInfo = {...this.state.ingredients};
    //     Object.keys(this.state.ingredients).forEach(ingredient => {
    //         disabledInfo[ingredient] = this.state.ingredients[ingredient] <= 0;
    //     });

    // And another one
    //   const disabledInfo = Object.entries(this.state.ingredients).reduce(
    //     (result, [key, value]) => { result[key] = ( value <= 0 ); return result }, {}
    // )

    return (
      <Eject>
        <Burger ingredients={this.state.ingredients} />
        <div style={{ textAlign: "center" }}>
          {this.state.totalPrice.toFixed(2)}
        </div>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Eject>
    );
  }
}

export default BurgerBuilder;
