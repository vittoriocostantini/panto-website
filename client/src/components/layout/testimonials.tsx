import { TestimonialCard, CarouselSlider } from "../common";
import { testimonialsData } from "../../types";
import { useResponsiveSlides } from "../../hooks/use-responsive-slides";

const Testimonials = () => {
  const { slidesToShow } = useResponsiveSlides({
    initialSlides: 4,
    rules: [
      { maxWidth: 640, slidesToShow: 1 },
      { maxWidth: 1024, slidesToShow: 2 },
      { maxWidth: 1280, slidesToShow: 2 },
      { maxWidth: 1536, slidesToShow: 3 },
    ],
    fallbackSlides: 3,
  });

  return (
    <section className="py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-sm font-semibold text-[#E08A33] uppercase tracking-wide mb-2">
          TESTIMONIALS
        </h2>
        <h1 className="text-4xl font-bold text-[#2D2D2D] text-center md:text-left">
          Our Client Reviews
        </h1>
      </div>
      <div className="">
        <CarouselSlider
          items={testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
          settings={{
            slidesToShow,
            slidesToScroll: 1,
          }}
          showArrows={true}
        />
      </div>
    </section>
  );
};

export default Testimonials;
