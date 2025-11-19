import { useState, useMemo } from "react";
import { CardProducts } from "../common";
import { getAllProducts } from "../../utils/products-list";
import { type Product } from "../../types";

interface ProductListProps {
  category?: string;
  limit?: number;
  showFilters?: boolean;
}

const ProductList = ({ category, limit, showFilters = false }: ProductListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | "all">(
    category || "all"
  );

  const allProducts = getAllProducts();

  const filteredProducts = useMemo(() => {
    let products = allProducts;

    if (selectedCategory !== "all") {
      products = products.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (limit) {
      products = products.slice(0, limit);
    }

    return products;
  }, [selectedCategory, limit]);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(allProducts.map((product) => product.category))
    );
    return ["all", ...uniqueCategories];
  }, [allProducts]);

  if (filteredProducts.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-500 text-lg">No hay productos disponibles.</p>
      </div>
    );
  }

  return (
    <section className="py-16">
      {showFilters && (
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === cat
                  ? "bg-[#1A1A1A] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat === "all" ? "Todos" : cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {filteredProducts.map((product) => (
          <CardProducts
            key={product.id}
            category={product.category}
            name={product.name}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

