import { type Product } from "../../types";
const API_URL = "http://localhost:5001/api/products";

/**
 * Obtiene todos los productos de la base de datos
 */
export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }
    const data = await response.json();
    // Mapear _id de MongoDB a id para el frontend
    return data.map((product: any) => ({
      id: product._id || product.id,
      category: product.category,
      name: product.name,
      price: product.price,
      rating: product.rating,
      image: product.image,
    }));
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }

};

/**
 * Filtra productos por categoría
 */
export const getProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  const allProducts = await getAllProducts();
  return allProducts.filter((product) => product.category === category);
};

/**
 * Busca un producto por ID
 */
export const getProductById = async (
  id: string
): Promise<Product | undefined> => {
  const allProducts = await getAllProducts();
  return allProducts.find((product) => product.id === id);
};
