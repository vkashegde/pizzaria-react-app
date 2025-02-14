//redux store will initiate here
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/cartSlice";
import CategorySlice from "./slices/categorySlice";
import SearchSlice from "./slices/searchSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
  },
});

export default Store;
