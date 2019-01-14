import React, { Component } from "react";
import Eject from "./../../hoc/Eject";
import Burger from "./../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: ["bacon", "salad", "cheese", "meat", "cheese", "meat"]
  };
  // state = {
  //   ingredients: {
  //     salad: 1,
  //     bacon: 1,
  //     cheese: 2,
  //     meat: 2
  //   }
  // };
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
