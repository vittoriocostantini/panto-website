import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import productReducer from "./slices/product-slice"; // <-- 1. Importa el reducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});

// ESTO ES LO QUE SOLUCIONA TUS ERRORES DE TYPESCRIPT
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
