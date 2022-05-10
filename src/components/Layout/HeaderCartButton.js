import { useContext } from "react";
import ModalContext from "../../store/modal-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const context = useContext(ModalContext);

  return (
    <button className={classes.button} onClick={context.openModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
