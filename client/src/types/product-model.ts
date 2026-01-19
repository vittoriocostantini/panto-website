export type ProductCategory = "chair" | "beds" | "sofa" | "lamps";

export interface Product {
  _id?: string; // Opcional por si viene de MongoDB
  category: ProductCategory;
  name: string;
  price: number;
  rating: number;
  image: string;
  description?: string;
}

export interface CardProductsProps extends Product {
  onAddToCart?: (product: Product) => void;
}

export interface SelectBarProductProps {
  value: ProductCategory;
  onChange: (category: ProductCategory) => void;
}
