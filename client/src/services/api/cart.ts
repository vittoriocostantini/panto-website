import { type CartItem } from "../../redux/slices/cart";

const CHECKOUT_URL = "http://localhost:5001/api/orders";

export interface CheckoutResult {
  success: boolean;
  message: string;
  type: "success" | "error" | "warning";
}

// Funciones puras para manipulación del carrito
export const removeCartItem = (
  cart: CartItem[],
  productId: string
): CartItem[] => cart.filter((item) => item.id !== productId);

export const updateCartItemQuantity = (
  cart: CartItem[],
  productId: string,
  delta: number
): CartItem[] =>
  cart
    .map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    )
    .filter((item) => item.quantity > 0);

export const clearCartItems = (): CartItem[] => [];

export const calculateCartTotals = (cart: CartItem[]) => {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return { subtotal, total: subtotal };
};

// Función de checkout
export const checkout = async (cart: CartItem[]): Promise<CheckoutResult> => {
  if (cart.length === 0) {
    return {
      success: false,
      message: "El carrito está vacío",
      type: "warning",
    };
  }

  try {
    const response = await fetch(CHECKOUT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });

    if (response.ok) {
      return {
        success: true,
        message: "¡Compra realizada con éxito! Gracias por tu pedido",
        type: "success",
      };
    }

    return {
      success: false,
      message: "Error al procesar la compra. Por favor, intenta nuevamente",
      type: "error",
    };
  } catch (error) {
    console.error("Error en el checkout:", error);
    return {
      success: false,
      message: "Hubo un problema al finalizar la compra. Verifica tu conexión",
      type: "error",
    };
  }
};

