import type { Product } from "./product";

export interface CardProductsProps extends Product {
  onAddToCart?: (product: Product) => void;
}
