import { useContext, useState, useEffect } from "react";
import cartContext from "../../store/cart-context";
import ModalContext from "../../store/modal-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const modalContext = useContext(ModalContext);
  const cartcontext = useContext(cartContext);
  const [btnHighlighted, setishighlighted] = useState(false);

  const { items } = cartcontext;
  // total item count for cart when adding
  const numberOfCartItem = null;

  const btnClasses = `${classes.button} ${btnHighlighted}`;

  useEffect(() => {
    // it should bump when adding new item
  }, [items]);

  return (
    <button className={btnClasses} onClick={modalContext.openModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
