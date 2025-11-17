import { useState } from "react";
import { CardProducts, CarouselSlider } from "../common";
import { SelectBarProduct } from "../features/";
import { ArrowRightAlt } from "@mui/icons-material";
import {
  productsChair,
  productsBeds,
  productsSofa,
  productsLamps,
} from "../../constants";
import { type Product } from "../../types";
import { type ProductCategory } from "../../constants";
const ProductsContainer = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>("chair");

  const productsByCategory: Record<ProductCategory, Product[]> = {
    chair: productsChair,
    beds: productsBeds,
    sofa: productsSofa,
    lamp: productsLamps,
  };

  const currentProducts = productsByCategory[selectedCategory] ?? [];

  const carouselItems = currentProducts.map((product) => (
    <CardProducts
      key={product.id}
      category={product.category}
      name={product.name}
      price={product.price}
      rating={product.rating}
      image={product.image}
    />
  ));

  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="justify-center items-center text-center">
        <h2 className="text-5xl font-bold mb-4">Best Selling Product</h2>
        <SelectBarProduct
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>
      <CarouselSlider
        items={carouselItems}
        emptyMessage="No hay productos disponibles para esta categoría."
      />
      <div className="flex items-center justify-center mt-8">
        <h3 className="text-lg font-semibold text-orange-500 flex items-center gap-4 cursor-pointer">
          View All
          <ArrowRightAlt sx={{ fontSize: 30 }} />
        </h3>
      </div>
    </section>
  );
};

export default ProductsContainer;
