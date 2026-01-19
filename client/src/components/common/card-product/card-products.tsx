import { Star, Add } from "@mui/icons-material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useState } from "react";
import { type CardProductsProps } from "../../../types/product-model";


const CardProducts = ({
  category,
  name,
  price,
  rating,
  image,
  onAddToCart,
}: CardProductsProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart && !isAdding) {
      setIsAdding(true);
      onAddToCart({ category, name, price, rating, image });
      setTimeout(() => {
        setIsAdding(false);
      }, 800);
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden w-[320px] mx-auto">
      <div className="bg-[#F5F5F5] h-64 flex items-center justify-center px-6">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>

      <div className="px-6 py-5 relative">
        <p className="text-gray-400 text-sm mb-2">{category}</p>
        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{name}</h3>

        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              sx={{
                fontSize: 20,
                color: index < rating ? "#FFB800" : "#E5E5E5",
                fill: index < rating ? "#FFB800" : "#E5E5E5",
              }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-[#1A1A1A]">$ {price}</p>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all ${isAdding
              ? "bg-green-600 hover:bg-green-700"
              : "bg-[#1A1A1A] hover:bg-[#323131]"
              }`}
            aria-label={isAdding ? "Adding to cart" : "Add to cart"}
          >
            {isAdding ? (
              <DoneAllIcon sx={{ color: "#fff", fontSize: 24 }} />
            ) : (
              <Add sx={{ color: "#fff", fontSize: 24 }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
