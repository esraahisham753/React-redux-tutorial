import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cart: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    changeAmount: (state, { payload }) => {
      const changeType = payload.changeType;
      const itemId = payload.id;
      const item = state.cart.find((item) => item.id === itemId);

      if (changeType === "increase") {
        item.amount += 1;
      } else if (changeType === "decrease") {
        item.amount -= 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cart.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

//console.log(cartSlice);

export const { clearCart, removeItem, changeAmount, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
