import { useContext } from "react";
import cartContext from "../../store/cart-context";
import ModalContext from "../../store/modal-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const modalContext = useContext(ModalContext);
  const cartcontext = useContext(cartContext);

  const numberOfCartItem = cartcontext.items.reduce((currentVal, items) => {
    return currentVal + items.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={modalContext.openModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
