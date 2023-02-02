import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const currentCartItem = useSelector((state) => state.cart.totalItem);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{currentCartItem}</span>
    </button>
  );
};

export default CartButton;
