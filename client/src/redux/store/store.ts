import { configureStore } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

// Reducer temporal placeholder - será reemplazado cuando agregues slices reales
const placeholderSlice = createSlice({
  name: "placeholder",
  initialState: {},
  reducers: {
    // No hay acciones por ahora
  },
})

export interface AppStore {
  // Aquí agregarás tus futuros slices (cart, favorites, etc.)
  placeholder: ReturnType<typeof placeholderSlice.reducer>
}

export const store = configureStore<AppStore>({
  reducer: {
    placeholder: placeholderSlice.reducer,
    // Aquí agregarás tus futuros reducers cuando los crees
    // Ejemplo: cart: cartSlice.reducer,
  },
})


