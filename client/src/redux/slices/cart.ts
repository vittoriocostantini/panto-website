import { createSlice, createSelector, type PayloadAction } from "@reduxjs/toolkit";
import { type Product } from "../../types";
import { type RootState } from "../store/store";

export type CartItem = Product & { quantity: number };

interface CartState {
  items: CartItem[];
  loading: boolean;
}

const CART_STORAGE_KEY = "panto-cart";

// Cargar el estado inicial desde localStorage
const loadCartFromStorage = (): CartItem[] => {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      const parsed = JSON.parse(storedCart);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (error) {
    console.error("Error al cargar el carrito desde localStorage:", error);
  }
  return [];
};

const initialState: CartState = {
  items: loadCartFromStorage(),
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // Persistir en localStorage
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; delta: number }>
    ) => {
      const { productId, delta } = action.payload;
      const item = state.items.find((item) => item.id === productId);

      if (item) {
        item.quantity = Math.max(1, item.quantity + delta);
        if (item.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== productId);
        }
      }

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([]));
    },

    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Actions
export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  setCartItems,
  setLoading,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartLoading = (state: RootState) => state.cart.loading;
export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Selector memoizado para los totales del carrito
export const selectCartTotals = createSelector(
  [selectCartItems],
  (items) => {
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return { subtotal, total: subtotal };
  }
);

export default cartSlice.reducer;

