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
  const numberOfCartItem = items.reduce((currentVal, items) => {
    return currentVal + items.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setishighlighted(true);

    const timer = setTimeout(() => {
      setishighlighted(false);
    }, 300);
    return () => clearTimeout(timer);
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
