import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

const url = "https://www.course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk(
  "cart/get-cart-items",
  async (name, thunkAPI) => {
    //console.log(name);
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.isLoading = false;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action);
      });
  },
});

//console.log(cartSlice);

export const { clearCart, removeItem, changeAmount, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
