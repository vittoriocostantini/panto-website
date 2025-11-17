import { Star } from "@mui/icons-material";
import type { Testimonial } from "../../types";

const TestimonialCard = ({
  backgroundImage,
  profileImage,
  name,
  title,
  testimonial,
  rating,
}: Testimonial) => {
  return (
    <div className="relative rounded-2xl overflow-hidden mx-auto   w-[500px] h-[700px] flex flex-col justify-end">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />
      <div className="relative z-10 bg-white rounded-3xl p-8 w-[450px] mx-auto mb-8 flex flex-col items-center shadow-xl">
        <div className="mb-6 -mt-16">
          <div className="w-24 h-24 rounded-full p-2.5 bg-white">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 text-center">
          {name}
        </h3>

        <p className="text-gray-500 text-sm mb-4 text-center">{title}</p>

        <p className="text-gray-600 text-center mb-6 leading-relaxed px-4">
          "{testimonial}"
        </p>

        <div className="flex items-center justify-center gap-1 mt-auto">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`text-xl ${
                index < rating ? "text-[#FF8A00]" : "text-[#E5E5E5]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
