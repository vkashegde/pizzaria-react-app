/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const exisitingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (exisitingItem) {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            console.log("same id");
            return { ...item, qty: item.qty + 1 };
          } else {
            console.log("not same id");
            return item;
          }
        });

        console.log("cart state : ", state.cart);
      } else {
        state.cart.push(action.payload);
        //console.log(state);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) => {
        return item.id == action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : item;
      });
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id == action.payload.id && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return { ...item };
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  CartSlice.actions;
export default CartSlice.reducer;

/* 
Every slice has 
1)slice name 
2) initial state 
3) reducers

* Reducers will have functions like , add to cart remove from cart
* Reducers will have state and action params 
* In action we get paylaod which contain new data which needs to be added to state and update state


*/
