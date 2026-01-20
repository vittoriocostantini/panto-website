import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import productReducer from "./slices/product-slice";
import cartReducer from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
