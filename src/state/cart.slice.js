import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const addToCart = createAsyncThunk("cart/add", async (product) => {
  // api request logic
  return product;
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
  },
});

export default cartSlice.reducer;
