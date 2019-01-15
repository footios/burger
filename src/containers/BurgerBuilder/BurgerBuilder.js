import React, { Component } from "react";

import Eject from "../../hoc/Eject";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Eject>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Eject>
    );
  }
}

export default BurgerBuilder;
