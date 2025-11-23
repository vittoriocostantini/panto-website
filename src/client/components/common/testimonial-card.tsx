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
    <div className="">
      <div className="relative rounded-2xl   overflow-hidden mx-auto  w-[300px] h-[500px] md:w-[350px] md:h-[500px] lg:w-[480px] lg:h-[700px] xl:w-[450px] xl:h-[700px] 2xl:w-[500px] 2xl:h-[700px]   flex flex-col justify-end">
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="relative z-10 bg-white rounded-3xl p-8 w-[250px] md:w-[300px] lg:w-[450px] xl:w-[400px] 2xl:w-[450px] mx-auto mb-8 flex flex-col items-center shadow-xl">
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
    </div>
  );
};

export default TestimonialCard;
