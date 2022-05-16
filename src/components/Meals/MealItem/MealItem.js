import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import cartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(cartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm addToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
