import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const productStore = configureStore({
    reducer:{
        cart: cartReducer,
    },
});

export default productStore;