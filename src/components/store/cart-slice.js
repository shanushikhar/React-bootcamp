import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItem: 0,
  changeFromLocal: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItem: 0,
    changeFromLocal: false,
  },
  reducers: {
    getDatafromDB(state, action) {
      const { items, totalItem } = action.payload;
      state.items = items;
      state.totalItem = totalItem;
    },
    addCartHandler(state, action) {
      const itemToAdd = action.payload;
      state.totalItem++;
      const isItemPresent = state.items.find((item) => item.id == itemToAdd.id);
      //   console.log(JSON.stringify(isItemPresent, undefined, 2));
      state.changeFromLocal = true;
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
      state.changeFromLocal = true;
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
export const getCartData = cartSlice.actions.getDatafromDB;

export default cartSlice.reducer;
