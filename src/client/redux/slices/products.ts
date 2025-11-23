import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { type Product } from "../../types";
import { type ProductCategory } from "../../constants";
import { getProductsByCategory as fetchProductsAPI } from "../../services/api/products";
import { type RootState } from "../store/store";

// Mapeo de categorías frontend -> backend
const CATEGORY_MAP: Record<ProductCategory, string> = {
  chair: "Chair",
  beds: "Beds",
  sofa: "Sofa",
  lamp: "Lamps",
};

// Categorías disponibles
const CATEGORIES: ProductCategory[] = ["chair", "beds", "sofa", "lamp"];

interface ProductsState {
  // Productos agrupados por categoría
  productsByCategory: Record<ProductCategory, Product[]>;
  // Loading states por categoría
  loading: Record<ProductCategory, boolean>;
  // Errores por categoría
  errors: Record<ProductCategory, string | null>;
  // Categoría seleccionada actualmente
  selectedCategory: ProductCategory;
}

// Helper para crear el estado inicial sin repetición
const createInitialState = (): ProductsState => ({
  productsByCategory: CATEGORIES.reduce((acc, cat) => {
    acc[cat] = [];
    return acc;
  }, {} as Record<ProductCategory, Product[]>),
  loading: CATEGORIES.reduce((acc, cat) => {
    acc[cat] = false;
    return acc;
  }, {} as Record<ProductCategory, boolean>),
  errors: CATEGORIES.reduce((acc, cat) => {
    acc[cat] = null;
    return acc;
  }, {} as Record<ProductCategory, string | null>),
  selectedCategory: "chair",
});

const initialState: ProductsState = createInitialState();

// Thunk asíncrono para fetch de productos
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category: ProductCategory, { rejectWithValue }) => {
    try {
      const dbCategory = CATEGORY_MAP[category];
      const products = await fetchProductsAPI(dbCategory);
      return { category, products };
    } catch (error) {
      return rejectWithValue({
        category,
        error: error instanceof Error ? error.message : "Error desconocido",
      });
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Cambiar categoría seleccionada
    setSelectedCategory: (state, action: PayloadAction<ProductCategory>) => {
      state.selectedCategory = action.payload;
    },

    // Limpiar errores de una categoría
    clearCategoryError: (state, action: PayloadAction<ProductCategory>) => {
      state.errors[action.payload] = null;
    },

    // Limpiar productos de una categoría (por si necesitas invalidar el caché)
    clearCategoryProducts: (state, action: PayloadAction<ProductCategory>) => {
      state.productsByCategory[action.payload] = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Pending
      .addCase(fetchProductsByCategory.pending, (state, action) => {
        const category = action.meta.arg;
        state.loading[category] = true;
        state.errors[category] = null;
      })
      // Fulfilled
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        const { category, products } = action.payload;
        state.productsByCategory[category] = products;
        state.loading[category] = false;
        state.errors[category] = null;
      })
      // Rejected
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        const payload = action.payload as { category: ProductCategory; error: string };
        state.loading[payload.category] = false;
        state.errors[payload.category] = payload.error;
      });
  },
});

// Actions
export const { setSelectedCategory, clearCategoryError, clearCategoryProducts } =
  productsSlice.actions;

// Selectors
export const selectSelectedCategory = (state: RootState) =>
  state.products.selectedCategory;

export const selectProductsByCategory = (
  state: RootState,
  category: ProductCategory
) => state.products.productsByCategory[category];

export const selectCurrentProducts = (state: RootState) =>
  state.products.productsByCategory[state.products.selectedCategory];

export const selectIsLoadingCategory = (
  state: RootState,
  category: ProductCategory
) => state.products.loading[category];

export const selectIsLoadingCurrent = (state: RootState) =>
  state.products.loading[state.products.selectedCategory];

export const selectCategoryError = (
  state: RootState,
  category: ProductCategory
) => state.products.errors[category];

export const selectCurrentError = (state: RootState) =>
  state.products.errors[state.products.selectedCategory];

// Selector para verificar si una categoría ya tiene productos cacheados
export const selectHasCachedProducts = (
  state: RootState,
  category: ProductCategory
) => state.products.productsByCategory[category].length > 0;

export default productsSlice.reducer;

