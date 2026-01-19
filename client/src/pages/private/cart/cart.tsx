import { ShoppingCart, ArrowBack, DoneAll } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CardCheckout } from "../../../components/common/card-checkout";
import { PublicRoutes } from "../../../routes";

// Mock data temporal para visualizar el frontend
const MOCK_PRODUCTS = [
  { id: 1, name: "Producto de Ejemplo", price: 29.99, quantity: 1, image: "https://via.placeholder.com/150" },
];

function Cart() {
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [cartProducts, setCartProducts] = useState(MOCK_PRODUCTS);

  // Cálculos de interfaz
  const subtotal = cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal;

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartProducts(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const handleRemove = (id: number) => {
    setCartProducts(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulación visual de proceso
    setTimeout(() => {
      setCheckoutSuccess(true);
      setTimeout(() => setIsCheckingOut(false), 2000);
    }, 1500);
  };

  if (cartProducts.length === 0) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <ShoppingCart sx={{ fontSize: 120, color: "#E5E5E5", margin: "0 auto 2rem" }} />
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-8">Agrega productos para comenzar a comprar</p>
            <button
              onClick={() => navigate(PublicRoutes.HOME)}
              className="px-8 py-4 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#323131] transition-colors font-semibold cursor-pointer"
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
            className="flex items-center gap-2 text-gray-600 hover:text-[#1A1A1A] mb-4 transition-colors cursor-pointer"
          >
            <ArrowBack />
            <span>Continuar comprando</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">Carrito de Compras</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartProducts.map((item) => (
              <CardCheckout
                key={item.id}
                product={{
                  id: item.id.toString(),
                  category: "category",
                  name: "name",
                  price: item.price,
                  quantity: item.quantity,
                  rating: 0,
                  image: "image",
                }}
                onQuantityChange={(productId: string, delta: number) => handleQuantityChange(Number(productId), delta)}
                onRemove={(productId: string) => handleRemove(Number(productId))}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Resumen del Pedido</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold text-[#1A1A1A]">
                  <span>Total</span>
                  <span>$ {total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className={`w-full px-8 py-4 text-white rounded-lg transition-all font-semibold mb-4 flex items-center justify-center gap-2 ${
                  checkoutSuccess ? "bg-green-600" : "bg-[#1A1A1A] hover:bg-[#323131] cursor-pointer"
                } ${isCheckingOut && !checkoutSuccess ? "opacity-75 cursor-wait" : ""}`}
              >
                {isCheckingOut ? (
                  checkoutSuccess ? (
                    <>
                      <DoneAll />
                      <span>¡Compra Exitosa!</span>
                    </>
                  ) : (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Procesando...</span>
                    </>
                  )
                ) : (
                  <span>Comprar Ahora</span>
                )}
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
