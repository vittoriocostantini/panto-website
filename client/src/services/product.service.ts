import axios from "axios";
import { Product } from "../types/product-model/product-model";

class ProductService {
  private readonly api = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  });

  async getAll(): Promise<Product[]> {
    const { data } = await this.api.get<Product[]>("/products");
    return data;
  }

  async update(product: Product): Promise<Product> {
    const { data } = await this.api.put<Product>(`/products/${product._id}`, product);
    return data;
  }
}

export const productService = new ProductService();
