import React, { Component } from "react";
import Eject from "./../../hoc/Eject";
import Burger from "./../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: ["bacon", "salad", "cheese", "meat", "cheese", "meat"]
  };

  render() {
    // Here gets the burger build, as the ingredients attribute
    // gets access to the state.....
    return (
      <Eject>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Eject>
    );
  }
}

export default BurgerBuilder;
