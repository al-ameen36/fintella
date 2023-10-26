import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const addToCart = createAsyncThunk("cart/add", async (product) => {
  // api request logic
  return product;
});
export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (product) => {
    // api request logic
    return product;
  }
);
export const checkout = createAsyncThunk("cart/checkout", async (body) => {
  const token = localStorage.getItem("token").replaceAll('"', "");
  const res = (
    await fetch("https://fintella.itcentral.ng/order", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
  ).json();
  return res;
});

const initialState = {
  cart: [],
  loading: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      if (!state.cart.find((item) => item.id === action.payload.id))
        state.cart.push(action.payload);
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.cart = state.cart.filter((item) => action.payload.id !== item.id);
    });
    builder.addCase(checkout.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default cartSlice.reducer;
