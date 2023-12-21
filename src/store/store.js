import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "../store/slices/addToCartSlice"
import priceSlice from "./slices/priceSlice";

const store = configureStore({
    reducer: {
        product: addToCartSlice,
        price: priceSlice
    }
})

export default store;