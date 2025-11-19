import { useState } from "react";
import { ShoppingCart, ArrowBack } from "@mui/icons-material";
import { getProductById } from "../../../utils/products-list";
import { type Product } from "../../../types";
import { useNavigate } from "react-router-dom";
import { CardCartProduct } from "../../../components/common";
import { PublicRoutes } from "../../../models";
// Datos de ejemplo para el diseño (después se conectará con el contexto/estado)
const mockCartItems: Array<{ productId: string; quantity: number }> = [
  { productId: "1", quantity: 1 },
  { productId: "2", quantity: 1 },
  { productId: "s1", quantity: 1 },
];

function Cart() {
  const [cartItems] = useState(mockCartItems);

  const cartProducts = cartItems
    .map((item) => {
      const product = getProductById(item.productId);
      return product ? { ...product, quantity: item.quantity } : null;

    })
    .filter((item): item is Product & { quantity: number } => item !== null);


  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% de impuestos (ejemplo)
  const total = subtotal + tax;

  const handleQuantityChange = (productId: string, delta: number) => {
    // TODO: Conectar con el contexto del carrito
    console.log("Cambiar cantidad:", productId, delta);
  };

  const handleRemoveItem = (productId: string) => {
    // TODO: Conectar con el contexto del carrito
    console.log("Eliminar producto:", productId);
  };

const navigate = useNavigate()

  if (cartProducts.length === 0) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <ShoppingCart
              sx={{ fontSize: 120, color: "#E5E5E5", margin: "0 auto 2rem" }}
            />
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-gray-600 mb-8">
              Agrega productos para comenzar a comprar
            </p>
            <button
              onClick={() => navigate(PublicRoutes.HOME)}
              className="px-8 py-4 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#323131] transition-colors font-semibold"
            >
              Explorar Productos
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <button
            onClick={() => navigate(PublicRoutes.HOME)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#1A1A1A] mb-4 transition-colors"
          >
            <ArrowBack />
            <span>Continuar comprando</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Carrito de Compras
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-4">
            {cartProducts.map((item) => (
              <CardCartProduct
                key={item.id}
                product={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>


          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                Resumen del Pedido
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Impuestos</span>
                  <span className="font-semibold">$ {tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold text-[#1A1A1A]">
                  <span>Total</span>
                  <span>$ {total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full px-8 py-4 bg-[#1A1A1A] cursor-pointer text-white rounded-lg hover:bg-[#323131] transition-colors font-semibold mb-4">
                Comprar Ahora
              </button>

              <button
                onClick={() => navigate(PublicRoutes.HOME)}
                className="w-full px-8 py-4 border-2 cursor-pointer border-[#1A1A1A] text-[#1A1A1A] rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-colors font-semibold"
              >
                Continuar Comprando
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
