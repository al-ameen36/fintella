import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./user.slice";
import cartSlice from "./cart.slice";
import productsSlice from "./product.slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
