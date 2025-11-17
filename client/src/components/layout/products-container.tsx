import { useRef } from "react";
import Slider from "react-slick";
import CardProducts from "../common/card-products";
import sakariasImage from "../../assets/chairs/sakarias.png";
import baltsarImage from "../../assets/chairs/baltsar.png";
import anjayImage from "../../assets/chairs/anjay.png";
import nyantuyImage from "../../assets/chairs/nyantuy.png";
import eamesImage from "../../assets/chairs/eames.png";
import fauteiImage from "../../assets/chairs/fauteil.png";
import loungeImage from "../../assets/chairs/lounge.png";
import couchImage from "../../assets/chairs/couch.png";
import SelectBarProduct from "../features/select-bar-product";
import ButtonCarousel from "../common/button-carousel";
import { ArrowRightAlt } from "@mui/icons-material";


interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const ProductsContainer = () => {
  const sliderRef = useRef<Slider>(null);

  const productsChair: Product[] = [
    {
      id: "1",
      category: "Chair",
      name: "Sakarias Armchair",
      price: 392,
      rating: 5,
      image: sakariasImage,
    },
    {
      id: "2",
      category: "Chair",
      name: "Baltsar Chair",
      price: 299,
      rating: 4,
      image: baltsarImage,
    },
    {
      id: "3",
      category: "Chair",
      name: "Anjay Chair",
      price: 519,
      rating: 5,
      image: anjayImage,
    },
    {
      id: "4",
      category: "Chair",
      name: "Eames Chair",
      price: 921,
      rating: 5,
      image: eamesImage,
    },
    {
      id: "5",
      category: "Chair",
      name: "Fauteuil Chair",
      price: 921,
      rating: 5,
      image: fauteiImage,
    },
    {
      id: "6",
      category: "Chair",
      name: "Lounge Chair",
      price: 921,
      rating: 5,
      image: loungeImage,
    },
    {
      id: "7",
      category: "Chair",
      name: "Couch Chair",
      price: 921,
      rating: 5,
      image: couchImage,
    },
    {
      id: "8",
      category: "Chair",
      name: "Nyantuy Chair",
      price: 921,
      rating: 5,
      image: nyantuyImage,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="justify-center items-center text-center">
        <h2 className="text-5xl font-bold mb-4">Best Selling Product</h2>
        <SelectBarProduct />
      </div>
      <div className="slider-container relative">
        <ButtonCarousel
          onClick={goToPrev}
          direction="left"
          ariaLabel="Anterior"
        />
        <Slider ref={sliderRef} {...settings}>
          {productsChair.map((product) => (
            <div key={product.id}>
              <CardProducts
                category={product.category}
                name={product.name}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            </div>
          ))}
        </Slider>
        <ButtonCarousel
          onClick={goToNext}
          direction="right"
          ariaLabel="Siguiente"
        />
      </div>
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
