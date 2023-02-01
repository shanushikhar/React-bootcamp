import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import counterSlice from "./counter-slice";

const store = configureStore({
  reducer: {
    myCounter: counterSlice,
    ourAuth: authSlice,
  },
});

export default store;
