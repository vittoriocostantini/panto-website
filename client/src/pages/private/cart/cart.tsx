import { ShoppingCart, ArrowBack, DoneAll } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  updateQuantityThunk,
  removeProductThunk,
  clearCart,
  type CartItem
} from "../../../redux/slices/cart-slice";
import { PublicRoutes } from "../../../routes";
import { CardCheckout } from "../../../components/common/card-checkout";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { items: cartProducts, status } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.auth || { user: null });

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const subtotal = cartProducts.reduce((acc: number, item: CartItem) =>
    acc + (item.price * item.quantity), 0
  );


  const handleQuantityChange = (id: string, delta: number) => {
    const item = cartProducts.find((p: CartItem) => p.productId === id);

    if (item && id) {
      const newQuantity = item.quantity + delta;
      if (newQuantity < 1) return;

      const guestId = (!user ? (localStorage.getItem("guestId") ?? undefined) : undefined);

      dispatch(updateQuantityThunk({
        productId: id,
        delta: delta,
        userId: user?._id,
        guestId: guestId
      }));
    }
  };

  const handleRemove = (id: string) => {
    if (!id) return;

    const guestId = (!user ? (localStorage.getItem("guestId") ?? undefined) : undefined);

    dispatch(removeProductThunk({
      productId: id,
      userId: user?._id,
      guestId: guestId
    }));
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setCheckoutSuccess(true);
      setTimeout(() => {
        dispatch(clearCart());
        setIsCheckingOut(false);
        navigate(PublicRoutes.HOME);
      }, 2000);
    }, 1500);
  };

  if (status === "loading" && cartProducts.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 font-medium">Actualizando carrito...</p>
      </div>
    );
  }

  if (cartProducts.length === 0) {
    return (
      <div className="min-h-screen bg-white py-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full text-center">
          <ShoppingCart sx={{ fontSize: 100, color: "#f3f4f6", mb: 4 }} />
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">Tu carrito está vacío</h2>
          <p className="text-gray-500 mb-8">Parece que aún no has agregado nada.</p>
          <button
            onClick={() => navigate(PublicRoutes.HOME)}
            className="px-10 py-4 bg-[#1A1A1A] text-white rounded-xl hover:bg-gray-800 transition-all font-bold cursor-pointer shadow-lg shadow-gray-200"
          >
            Ir a la tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-[#1A1A1A] mb-6 transition-colors cursor-pointer group"
          >
            <ArrowBack className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Volver</span>
          </button>
          <h1 className="text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Mi Carrito <span className="text-gray-400 text-2xl font-normal">({cartProducts.length})</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-2">
            {cartProducts.map((item: CartItem, index: number) => (
              <CardCheckout
                key={item.productId || `cart-item-${index}`}
                product={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Resumen</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-[#1A1A1A]">$ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Envío</span>
                  <span className="text-green-600 font-bold">Gratis</span>
                </div>
                <div className="border-t border-gray-100 pt-6 flex justify-between text-2xl font-black text-[#1A1A1A]">
                  <span>Total</span>
                  <span>$ {subtotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className={`w-full py-5 text-white rounded-2xl transition-all font-bold flex items-center justify-center gap-3 shadow-xl ${checkoutSuccess
                    ? "bg-green-600 shadow-green-100"
                    : "bg-[#1A1A1A] hover:bg-gray-800 cursor-pointer shadow-gray-200"
                    } ${isCheckingOut && !checkoutSuccess ? "opacity-70 cursor-wait" : ""}`}
                >
                  {isCheckingOut ? (
                    checkoutSuccess ? (
                      <><DoneAll /> <span>¡Completado!</span></>
                    ) : (
                      <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> <span>Procesando...</span></>
                    )
                  ) : (
                    "Confirmar Compra"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
