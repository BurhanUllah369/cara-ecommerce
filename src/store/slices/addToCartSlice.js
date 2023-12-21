import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "add-to-cart",
  initialState: [],
  reducers: {
    addProductToCart(state, action) {
        state.push(action.payload);
    },
    removeProductFromCart(state, action) {
        state.splice(action.payload, 1);
    },
  },
});

export default addToCartSlice.reducer;
export const { addProductToCart, removeProductFromCart } =
  addToCartSlice.actions;
