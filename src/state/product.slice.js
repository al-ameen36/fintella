import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const getProducts = createAsyncThunk("products/getAll", async () => {
  // fintella.itcentral.ng
  const res = (await fetch("https://fintella.itcentral.ng/products")).json();
  return res;
});

const initialState = {
  cart: [],
  loading: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.cart.push(action.payload);
    });
  },
});

export default productsSlice.reducer;
