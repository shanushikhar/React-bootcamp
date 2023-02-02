import classes from "./CartItem.module.css";

import { useDispatch } from "react-redux";
import { cartAddActions, removeCartActions } from "../store";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, quantity, total, price } = props.item;

  const addCartHandeler = () => {
    dispatch(
      cartAddActions({
        id,
        title,
        price,
      })
    );
  };

  const removeCartHandler = () => {
    console.log({ id });
    dispatch(removeCartActions(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartHandler}>-</button>
          <button onClick={addCartHandeler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
