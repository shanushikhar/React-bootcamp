import { useReducer } from "react";
import cartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const CartProvider = (props) => {
  return <>{props.children}</>;
};

export default CartProvider;
