import { Delete, Add, Remove } from "@mui/icons-material";
import { CartProduct } from "../../../redux/slices/cart-slice";

interface CardCheckoutProps {
  product: CartProduct;
  onQuantityChange: (productId: string, delta: number) => void;
  onRemove: (productId: string) => void;
}

const CardCheckout = ({
  product,
  onQuantityChange,
  onRemove,
}: CardCheckoutProps) => {

  const productId = product.productId;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-all mb-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="bg-[#F5F5F5] rounded-xl w-full sm:w-32 h-32 flex items-center justify-center shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-2"
          />
        </div>

        <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            {product.category && (
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                {product.category}
              </p>
            )}
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">
              {product.name}
            </h3>
            <p className="text-xl font-bold text-[#1A1A1A]">
              $ {product.price.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
              <button
                onClick={() => onQuantityChange(productId, -1)}
                className="px-3 py-2 hover:bg-gray-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-gray-600"
                disabled={product.quantity <= 1}
                aria-label="Disminuir cantidad"
              >
                <Remove sx={{ fontSize: 18 }} />
              </button>

              <span className="px-2 py-2 min-w-[40px] text-center font-bold text-[#1A1A1A]">
                {product.quantity}
              </span>

              <button
                onClick={() => onQuantityChange(productId, 1)} // Usamos productId
                className="px-3 py-2 hover:bg-gray-200 transition-colors text-gray-600"
                aria-label="Aumentar cantidad"
              >
                <Add sx={{ fontSize: 18 }} />
              </button>
            </div>

            {/* Botón Eliminar */}
            <button
              onClick={() => onRemove(productId)} // Usamos productId
              className="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
              aria-label="Eliminar del carrito"
            >
              <Delete sx={{ fontSize: 22 }} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer de la Card con Subtotal */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end items-center gap-2">
        <span className="text-gray-500 text-sm">Subtotal:</span>
        <p className="text-xl font-bold text-[#1A1A1A]">
          $ {(product.price * product.quantity).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CardCheckout;
