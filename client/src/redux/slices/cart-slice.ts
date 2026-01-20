import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { cartService } from "../../services/cart";
import { logout } from "./auth-slice";

export interface CartProduct {
  productId: string;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

export type CartItem = CartProduct;

interface CartState {
  items: CartProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}


export const fetchCartThunk = createAsyncThunk(
  "cart/fetch",
  async (params: { userId?: string; guestId?: string }, { rejectWithValue }) => {
    try {
      const data = await cartService.getCart(params.userId, params.guestId);
      return data.items; // El backend devuelve el objeto carrito con la propiedad items
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error al obtener el carrito");
    }
  }
);

export const addToCartThunk = createAsyncThunk(
  "cart/add",
  async (payload: CartProduct & { guestId?: string; userId?: string }, { rejectWithValue }) => {
    try {
      const { userId, guestId, ...productInfo } = payload;
      const body = {
        userId,
        guestId,
        product: { ...productInfo }
      };
      const data = await cartService.addToCart(body);
      return data.items;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error al añadir producto");
    }
  }
);

export const updateQuantityThunk = createAsyncThunk(
  "cart/updateQuantity",
  async (payload: { productId: string; delta: number; guestId?: string; userId?: string }, { rejectWithValue }) => {
    try {
      const { productId, ...rest } = payload;
      const data = await cartService.updateQuantity(productId, rest);
      return data.items;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error al actualizar cantidad");
    }
  }
);

export const removeProductThunk = createAsyncThunk(
  "cart/remove",
  async (payload: { productId: string; guestId?: string; userId?: string }, { rejectWithValue }) => {
    try {
      const { productId, ...ids } = payload;
      const data = await cartService.removeFromCart(productId, ids);
      return data.items;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error al eliminar producto");
    }
  }
);

export const mergeCartThunk = createAsyncThunk(
  "cart/merge",
  async (payload: { guestId: string; userId: string }, { rejectWithValue }) => {
    try {
      const data = await cartService.merge(payload.guestId, payload.userId);
      return data.items;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error al sincronizar");
    }
  }
);


const initialState: CartState = {
  items: [],
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.items = [];
      state.status = "idle";
      state.error = null;
    });

    builder
      .addMatcher(
        (action) => action.type.startsWith("cart/") && action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("cart/") && action.type.endsWith("/fulfilled"),
        (state, action: PayloadAction<CartProduct[]>) => {
          state.status = "succeeded";
          state.items = action.payload || [];
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("cart/") && action.type.endsWith("/rejected"),
        (state, action: any) => {
          state.status = "failed";
          state.error = action.payload || "Error inesperado";
        }
      );
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
