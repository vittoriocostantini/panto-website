import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductCategory } from "../../types/product-model";
import { productService } from "../../services/product.service";

interface ProductState {
  items: Product[];
  selectedCategory: ProductCategory;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  selectedCategory: "chair",
  status: "idle",
  error: null,
};

export const fetchAllProducts = createAsyncThunk("products/fetchAll", async () => {
  return await productService.getAll();
});

export const updateProductThunk = createAsyncThunk(
  "products/update",
  async (productData: Product, { rejectWithValue }) => {
    try {
      const response = await productService.update(productData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error al actualizar");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<ProductCategory>) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // --- Fetch All Products ---
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error al cargar productos";
      })

      .addCase(updateProductThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProductThunk.fulfilled, (state, action: PayloadAction<Product>) => {
        state.status = "succeeded";
        const updatedProduct = action.payload;
        const index = state.items.findIndex((p) => p._id === updatedProduct._id);

        if (index !== -1) {
          state.items[index] = updatedProduct;
        }
      })
      .addCase(updateProductThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error al actualizar";
      });
  },
});

export const { setCategory } = productSlice.actions;
export default productSlice.reducer;
