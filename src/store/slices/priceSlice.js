// priceSlice.js
import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: {
    totalPrice: 0,
  },
  reducers: {
    addItemPrice(state, action) {
      state.totalPrice += parseInt(action.payload);
    },
    removeItemPrice(state, action) {
      state.totalPrice -= parseInt(action.payload);
    },
    updateTotalPrice(state, action) {
      state.totalPrice += action.payload;
    },
  },
});

export const { updateTotalPrice, addItemPrice, removeItemPrice } = priceSlice.actions;

export default priceSlice.reducer;
