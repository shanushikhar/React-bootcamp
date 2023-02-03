import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uiNotification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setUiState(state, action) {
      const uIItems = action.payload;
      state.uiNotification = {
        message: uIItems.message,
        status: uIItems.status,
        title: uIItems.title,
      };
    },
  },
});

export const uiAction = uiSlice.actions.setUiState;

export default uiSlice.reducer;
