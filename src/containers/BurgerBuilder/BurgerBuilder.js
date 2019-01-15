import React, { Component } from "react";
import Eject from "./../../hoc/Eject";
import Burger from "./../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 4,
      cheese: 2,
      meat: 2
    }
  };
  render() {
    return (
      <Eject>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Eject>
    );
  }
}

export default BurgerBuilder;
