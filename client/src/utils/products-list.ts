import {
  productsChair,
  productsBeds,
  productsSofa,
  productsLamps,
} from "../constants";
import { type Product } from "../types";

/**
 * Combina todos los productos de todas las categorías en un solo array
 */
export const getAllProducts = (): Product[] => {
  return [
    ...productsChair,
    ...productsBeds,
    ...productsSofa,
    ...productsLamps,
  ];
};

/**
 * Filtra productos por categoría
 */
export const getProductsByCategory = (category: string): Product[] => {
  const allProducts = getAllProducts();
  return allProducts.filter((product) => product.category === category);
};

/**
 * Busca un producto por ID
 */
export const getProductById = (id: string): Product | undefined => {
  const allProducts = getAllProducts();
  return allProducts.find((product) => product.id === id);
};

