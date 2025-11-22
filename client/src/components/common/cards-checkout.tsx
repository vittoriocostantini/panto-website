import { Delete, Add, Remove } from "@mui/icons-material";
import { type Product } from "../../types";

interface CardCheckoutProps {
  product: Product & { quantity: number };
  onQuantityChange: (productId: string, delta: number) => void;
  onRemove: (productId: string) => void;
}

const CardCheckout = ({
  product,
  onQuantityChange,
  onRemove,
}: CardCheckoutProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
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
            <p className="text-gray-400 text-sm mb-1">{product.category}</p>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              {product.name}
            </h3>
            <p className="text-2xl font-bold text-[#1A1A1A]">
              $ {product.price}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
              <button
                onClick={() => onQuantityChange(product.id, -1)}
                className="px-3 py-2 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={product.quantity <= 1}
              >
                <Remove sx={{ fontSize: 20 }} />
              </button>
              <span className="px-4 py-2 min-w-[50px] text-center font-semibold">
                {product.quantity}
              </span>
              <button
                onClick={() => onQuantityChange(product.id, 1)}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <Add sx={{ fontSize: 20 }} />
              </button>
            </div>

            <button
              onClick={() => onRemove(product.id)}
              className="p-2 text-red-500 cursor-pointer hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Eliminar producto"
            >
              <Delete sx={{ fontSize: 24 }} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end">
        <p className="text-lg font-semibold text-[#1A1A1A]">
          Subtotal: $ {product.price * product.quantity}
        </p>
      </div>
    </div>
  );
};

export default CardCheckout;
