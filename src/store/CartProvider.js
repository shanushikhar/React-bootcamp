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
    // console.log({ action });

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    let updatedItem;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // updatedItems = state.items.concat(action.item);

      //or
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    //console.log(existingItem);
    const updatedprice = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      console.log({ updatedItems, updatedprice });
    } else {
      // more than 1 item
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedprice,
    };
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
