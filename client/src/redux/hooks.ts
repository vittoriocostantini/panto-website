import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store/store";

// Hook tipado para dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Hook tipado para selector
export const useAppSelector = useSelector.withTypes<RootState>();

