import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLoggedIn(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export const loggedIn = authSlice.actions.isLoggedIn;
export const loggedOut = authSlice.actions.logOut;

export default authSlice.reducer;
