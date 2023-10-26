import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("products/getAll", async () => {
  const token = localStorage.getItem("token").replaceAll('"', "");
  const res = (
    await fetch("https://fintella.itcentral.ng/products?vendor_id=1", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
  ).json();
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
