import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRightAlt } from "@mui/icons-material";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchAllProducts, setCategory } from "../../redux/slices/product-slice";
import { CardProducts, CarouselSlider } from "../common";
import { SelectBarProduct } from "../features/";
import { useResponsiveSlides } from "../../hooks/use-responsive-slides";
import { CardSkeletons } from "../layout/skeletons/";
const ProductsContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, selectedCategory, status } = useSelector((state: RootState) => state.products);

  const { slidesToShow } = useResponsiveSlides({
    initialSlides: 4,
    rules: [
      { maxWidth: 640, slidesToShow: 1 },
      { maxWidth: 1024, slidesToShow: 2 },
      { maxWidth: 1280, slidesToShow: 3 },
    ],
    fallbackSlides: 4,
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllProducts());
    }
  }, [status, dispatch]);

  const filteredItems = items.filter(
    (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const renderItems = (): React.ReactNode[] => {

    if (items.length === 0) {
      return [...Array(slidesToShow)].map((_, index) => (
        <CardSkeletons key={`skeleton-${index}`} />
      ));
    }

    if (filteredItems.length === 0) {
      return [];
    }

    return filteredItems.map((product, index) => (
      <CardProducts key={product._id || index} {...product} />
    ));
  };
  return (
    <section className="py-16 gray-gradient-product">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1A1A1A]">
          Best Selling Product
        </h2>
        <SelectBarProduct
          value={selectedCategory}
          onChange={(cat) => dispatch(setCategory(cat))}
        />
      </div>

      <CarouselSlider
        items={renderItems()}
        settings={{ slidesToShow }}
        emptyMessage={
          status === "succeeded" && filteredItems.length === 0
            ? "No hay productos en esta categoría."
            : ""
        }
      />

      <div className="flex items-center justify-center mt-12">
        <button className="group text-lg font-semibold text-orange-500 flex items-center gap-4 hover:text-orange-600 transition-colors">
          View All
          <ArrowRightAlt
            className="group-hover:translate-x-2 transition-transform"
            sx={{ fontSize: 30 }}
          />
        </button>
      </div>
    </section>
  );
};

export default ProductsContainer;
