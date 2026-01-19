import { useRef } from "react";
import Slider, { type Settings } from "react-slick";
import { ButtonCarousel } from "../buttons/";
import { type CarouselSliderProps } from "../../../types/carousel-slider";

const CarouselSlider = ({
  items,
  settings,
  showArrows = true,
  emptyMessage = "No hay elementos disponibles.",
}: CarouselSliderProps) => {
  const sliderRef = useRef<Slider>(null);

  const defaultSettings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    ...settings,
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  if (items.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">{emptyMessage}</p>
    );
  }

  return (
    <div className="slider-container relative">
      {showArrows && (
        <ButtonCarousel
          onClick={goToPrev}
          direction="left"
          ariaLabel="Anterior"
        />
      )}
      <Slider ref={sliderRef} {...defaultSettings}>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Slider>
      {showArrows && (
        <ButtonCarousel
          onClick={goToNext}
          direction="right"
          ariaLabel="Siguiente"
        />
      )}
    </div>
  );
};

export default CarouselSlider;

