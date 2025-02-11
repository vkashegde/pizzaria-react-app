//redux store will initiate here
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/cartSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default Store;
