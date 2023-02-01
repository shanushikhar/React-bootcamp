import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterIncrementAction = counterSlice.actions.increment;
export const counterIncreaseAction = counterSlice.actions.increase;
export const counterDecrementAction = counterSlice.actions.decrement;
export const counterToggleAction = counterSlice.actions.toggleCounter;

export default counterSlice.reducer;
