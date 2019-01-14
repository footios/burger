import classes from "./BurgerIngredient.module.css";

const burgerIngredients = {
  addable: [
    {
      type: "meat",
      label: "Meat",
      price: 0,
      className: classes.Meat
    },
    {
      type: "salad",
      label: "Lettuce",
      price: 0,
      className: classes.Salad
    },
    {
      type: "cheese",
      label: "Cheese",
      price: 0,
      className: classes.Cheese
    },
    {
      type: "bacon",
      label: "Bacon",
      price: 0,
      className: classes.Bacon
    }
  ],
  base: [
    {
      type: "bread-bottom",
      price: 0,
      className: classes.BreadBottom
    },
    {
      type: "bread-top",
      price: 0,
      className: classes.BreadTop,
      children: [classes.Seeds1, classes.Seeds2]
    }
  ]
};

export default burgerIngredients;
