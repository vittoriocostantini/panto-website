import { Star, Add } from "@mui/icons-material";

interface CardProductsProps {
  category: string;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const CardProducts = ({
  category,
  name,
  price,
  rating,
  image,
}: CardProductsProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden w-[320px] mx-auto">
      <div className="bg-[#F5F5F5] py-8 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-contain max-h-70"
        />
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
            className="w-12 h-12 rounded-full cursor-pointer  bg-[#1A1A1A] flex items-center justify-center hover:bg-[#323131] transition-colors"
            aria-label="Add to cart"
          >
            <Add sx={{ color: "#fff", fontSize: 24 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
