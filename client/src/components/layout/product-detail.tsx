import { useState, useEffect } from "react";
import { Star, Add, ShoppingCart, ArrowBack } from "@mui/icons-material";
import { getProductById, getProductsByCategory } from "../../utils/";
import { type Product } from "../../types";
import { CardProducts } from "../common";

interface ProductDetailProps {
  productId: string;
  onBack?: () => void;
  onAddToCart?: (product: Product) => void;
}

const ProductDetail = ({ productId, onBack, onAddToCart }: ProductDetailProps) => {
  const [product, setProduct] = useState<Product | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const foundProduct = getProductById(productId);
    setProduct(foundProduct);

    if (foundProduct) {
      const related = getProductsByCategory(foundProduct.category)
        .filter((p) => p.id !== productId)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (product && onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center py-16">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Producto no encontrado</p>
          {onBack && (
            <button
              onClick={onBack}
              className="px-6 py-2 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#323131] transition-colors"
            >
              Volver
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón de volver */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#1A1A1A] mb-8 transition-colors"
          >
            <ArrowBack />
            <span>Volver</span>
          </button>
        )}

        {/* Información principal del producto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Imagen del producto */}
          <div className="bg-[#F5F5F5] rounded-2xl p-8 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full max-h-[600px] object-contain"
            />
          </div>

          {/* Información del producto */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  sx={{
                    fontSize: 24,
                    color: index < product.rating ? "#FFB800" : "#E5E5E5",
                    fill: index < product.rating ? "#FFB800" : "#E5E5E5",
                  }}
                />
              ))}
              <span className="text-gray-600 ml-2">({product.rating}/5)</span>
            </div>

            {/* Precio */}
            <div className="py-4 border-t border-b border-gray-200">
              <p className="text-4xl font-bold text-[#1A1A1A]">$ {product.price}</p>
            </div>

            {/* Descripción (placeholder - puedes agregar descripción al tipo Product más adelante) */}
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                Descripción
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Este producto de alta calidad de la categoría {product.category} está
                diseñado para brindar comodidad y estilo a tu hogar. Fabricado con
                materiales premium y atención al detalle.
              </p>
            </div>

            {/* Selector de cantidad */}
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Cantidad:</span>
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-2 min-w-[60px] text-center font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#323131] transition-colors font-semibold"
              >
                <ShoppingCart />
                <span>Agregar al Carrito</span>
              </button>
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-colors font-semibold"
              >
                <Add />
                <span>Comprar Ahora</span>
              </button>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">
              Productos Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <CardProducts
                  key={relatedProduct.id}
                  category={relatedProduct.category}
                  name={relatedProduct.name}
                  price={relatedProduct.price}
                  rating={relatedProduct.rating}
                  image={relatedProduct.image}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

