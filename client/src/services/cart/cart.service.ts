import axios, { AxiosInstance } from "axios";
import { CartProduct } from "../../redux/slices/cart-slice";
class CartService {
  private readonly api: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Helper privado para el token
  private getAuthHeader() {
    const token = localStorage.getItem("userToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  async getCart(userId?: string, guestId?: string): Promise<{ items: CartProduct[] }> {
    const { data } = await this.api.get("/", {
      params: { userId, guestId }
    });
    return data;
  }

  async addToCart(payload: {
    userId?: string;
    guestId?: string;
    product: CartProduct
  }): Promise<{ items: CartProduct[] }> {
    const { data } = await this.api.post("/", payload);
    return data;
  }

  async updateQuantity(
    productId: string,
    payload: { userId?: string; guestId?: string; delta: number }
  ): Promise<{ items: CartProduct[] }> {
    const { data } = await this.api.put(`/${productId}`, payload);
    return data;
  }

  async removeFromCart(
    productId: string,
    ids: { userId?: string; guestId?: string }
  ): Promise<{ items: CartProduct[] }> {
    const { data } = await this.api.delete(`/${productId}`, {
      data: ids
    });
    return data;
  }

  async merge(guestId: string, userId: string): Promise<{ items: CartProduct[] }> {
    const { data } = await this.api.post(
      "/merge",
      { guestId, userId },
      { headers: this.getAuthHeader() }
    );
    return data;
  }
}

export const cartService = new CartService();
