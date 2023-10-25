import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./user.slice";
import cartSlice from "./cart.slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
