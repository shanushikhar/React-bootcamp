import { createSlice, configureStore, current } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItem: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartHandler(state, action) {
      const itemToAdd = action.payload;
      state.totalItem++;
      const isItemPresent = state.items.find((item) => item.id == itemToAdd.id);
      //   console.log(JSON.stringify(isItemPresent, undefined, 2));
      console.log(current(state.items));
      if (!isItemPresent) {
        state.items.push({
          id: itemToAdd.id,
          title: itemToAdd.title,
          quantity: 1,
          totalPrice: itemToAdd.price,
          price: itemToAdd.price,
        });
      } else {
        isItemPresent.quantity++;
        isItemPresent.totalPrice =
          isItemPresent.totalPrice + isItemPresent.price;
      }
    },
    removeCartHandler(state, action) {
      const itemId = action.payload;
      state.totalItem--;
      const isItemPresent = state.items.find((item) => item.id == itemId);
      if (isItemPresent.quantity == 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        isItemPresent.quantity--;
        isItemPresent.totalPrice =
          isItemPresent.totalPrice - isItemPresent.price;
      }
    },
  },
});

export const cartAddActions = cartSlice.actions.addCartHandler;
export const removeCartActions = cartSlice.actions.removeCartHandler;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
