// import { useEffect } from "react";
// import { CardProducts, CarouselSlider } from "../common";
// import { SelectBarProduct } from "../features";
import { ArrowRightAlt } from "@mui/icons-material";
import { useResponsiveSlides } from "../../hooks/use-responsive-slides";


const ProductsContainer = () => {




  const {  } = useResponsiveSlides({
    initialSlides: 4,
    rules: [
      { maxWidth: 640, slidesToShow: 1 },
      { maxWidth: 1024, slidesToShow: 2 },
      { maxWidth: 1280, slidesToShow: 3 },
    ],
    fallbackSlides: 4,
  });

  // Fetch productos solo si no están cacheados

  return (
    <section className="py-16 gray-gradient-product">
      <div className="justify-center items-center text-center">
        <h2 className="text-5xl font-bold mb-4">Best Selling Product</h2>
        {/* <SelectBarProduct
          value={selectedCategory}
          onChange={handleCategoryChange}
        /> */}
      </div>
      {/* <CarouselSlider
        items={carouselItems}
        settings={{
          slidesToShow,
        }}
        emptyMessage={
          loading
            ? "Cargando productos..."
            : "No hay productos disponibles para esta categoría."
        }
      /> */}
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
