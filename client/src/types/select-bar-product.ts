import { type ProductCategory } from "../constants";
export interface SelectBarProductProps {
  value: ProductCategory;
  onChange: (category: ProductCategory) => void;
}
