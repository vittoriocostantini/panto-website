import { ShoppingCart, ArrowBack, DoneAll } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CardCheckout, NotificationToast } from "../../../components/common";
import { PublicRoutes } from "../../../routes";
import {
  selectCartItems,
  selectCartLoading,
  selectCartTotals,
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../../../redux/slices/cart";
import { checkout } from "../../../services/api/";
import { useAppDispatch, useAppSelector } from "../../../redux/";
import { useNotification } from "../../../hooks";

function Cart() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const { notifications, hideNotification, showNotification } =
    useNotification();

  const cartProducts = useAppSelector(selectCartItems);
  const loading = useAppSelector(selectCartLoading);
  const { subtotal, total } = useAppSelector(selectCartTotals);

  const handleQuantityChange = (productId: string, delta: number) => {
    dispatch(updateQuantity({ productId, delta }));
  };

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    setCheckoutSuccess(false);

    const result = await checkout(cartProducts);

    if (result.success) {
      setCheckoutSuccess(true);
      showNotification(result.message, result.type);
      setTimeout(() => {
        dispatch(clearCart());
        setIsCheckingOut(false);
        setCheckoutSuccess(false);
      }, 2000);
    } else {
      showNotification(result.message, result.type);
      setIsCheckingOut(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Cargando carrito...</p>
          </div>
        </div>
      </div>
    );
  }

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
    <>
      {notifications.map((notification) => (
        <NotificationToast
          key={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={() => hideNotification(notification.id)}
        />
      ))}

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
              <CardCheckout
                key={item.id}
                product={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
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
                <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold text-[#1A1A1A]">
                  <span>Total</span>
                  <span>$ {total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className={`w-full px-8 py-4 text-white rounded-lg transition-all font-semibold mb-4 flex items-center justify-center gap-2 ${
                  isCheckingOut
                    ? "bg-[#323131] cursor-wait"
                    : checkoutSuccess
                    ? "bg-green-600"
                    : "bg-[#1A1A1A] hover:bg-[#323131] cursor-pointer"
                }`}
              >
                {isCheckingOut ? (
                  <>
                    {checkoutSuccess ? (
                      <>
                        <DoneAll />
                        <span>¡Compra Exitosa!</span>
                      </>
                    ) : (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Procesando...</span>
                      </>
                    )}
                  </>
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
    </>
  );
}

export default Cart;
