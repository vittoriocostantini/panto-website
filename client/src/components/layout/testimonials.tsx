import { TestimonialCard, CarouselSlider } from "../common";
import { testimonialsData } from "../../constants";

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-sm font-semibold text-[#E08A33] uppercase tracking-wide mb-2">
          TESTIMONIALS
        </h2>
        <h1 className="text-4xl font-bold text-[#2D2D2D]">
          Our Client Reviews
        </h1>
      </div>
      <div className="px-4">
        <CarouselSlider
          items={testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
          settings={{
            slidesToShow: 3,
            slidesToScroll: 1,
          }}
          showArrows={true}
        />
      </div>
    </section>
  );
};

export default Testimonials;
