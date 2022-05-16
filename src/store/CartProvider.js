import { useReducer } from "react";
import cartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log({ action });
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    return;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    return dispatchCartState({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    return dispatchCartState({ type: "REMOVE", id });
  };

  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <cartContext.Provider value={context}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
