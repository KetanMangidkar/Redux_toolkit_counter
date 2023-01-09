import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
};

export const customReducer = createReducer(initialState, {
  // this is the action that will be called when the action is dispatched

  increment: (state, action) => {
    state.c += 1;
  },

  decrement: (state, action) => {
    state.c -= 1;
  },

  incrementByvalue: (state, action) => {
    state.c += action.payload;
  },
});
