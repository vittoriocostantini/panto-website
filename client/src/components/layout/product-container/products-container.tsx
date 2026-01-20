import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRightAlt } from "@mui/icons-material";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchAllProducts, setCategory } from "../../../redux/slices/product-slice";
import { addToCartThunk } from "../../../redux/slices/cart-slice";
import { CardProducts } from "../../common/card-product";
import { CarouselSlider } from "../../common/carousel";
import { SelectBarProduct } from "../../features/";
import { CardSkeletons } from "../../layout/skeletons/";
import { useResponsiveSlides } from "../../../hooks/use-responsive-slides";
import { type Product } from "../../../types/product-model";

const ProductsContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, selectedCategory, status } = useSelector(
    (state: RootState) => state.products
  );

  const { user } = useSelector((state: RootState) => state.auth || { user: null });

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

  const handleAddToCart = (product: Product) => {
    console.log("1. Click detectado en Padre. Datos recibidos:", product);

    const productId = product._id;
    console.log("2. ID extraído:", productId);

    if (!productId) {
      console.error("3. ERROR: El producto no tiene un _id válido");
      return;
    }

    let guestId = localStorage.getItem("guestId");
    if (!user && !guestId) {
      guestId = crypto.randomUUID();
      localStorage.setItem("guestId", guestId);
    }

    dispatch(addToCartThunk({
      productId: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1,
      userId: user?._id,
      guestId: !user ? (guestId ?? undefined) : undefined
    }));
  };

  const renderItems = (): React.ReactNode[] => {
    if (status === "loading" || items.length === 0) {
      return [...Array(slidesToShow)].map((_, index) => (
        <CardSkeletons key={`skeleton-${index}`} />
      ));
    }

    return filteredItems.map((product) => (
      <CardProducts
        key={product._id}
        {...product}
        onAddToCart={handleAddToCart}
      />
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
        <button className="group text-lg font-semibold text-orange-500 flex items-center gap-4 hover:text-orange-600 transition-colors cursor-pointer">
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
