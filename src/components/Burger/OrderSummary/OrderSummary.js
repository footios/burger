import React from "react";
import Eject from "../../../hoc/Eject";
import Button from "../../UI/Button/Button";

// child of BurgerBuiler
const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey, i) => {
    return (
      <li key={igkey + i}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:{" "}
        {props.ingredients[igkey]}
      </li>
    );
  });

  return (
    <Eject>
      <h3>Your Order</h3>
      <p>Burger ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanselled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Eject>
  );
};

export default orderSummary;
