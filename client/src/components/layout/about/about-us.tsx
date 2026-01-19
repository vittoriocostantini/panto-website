import experienceImage from "../../../assets/about/experience.png";
import materialsImage from "../../../assets/about/materials.png";
import materials1Image from "../../../assets/about/materials-1.png";
import materials2Image from "../../../assets/about/materials-2.png";
import { ArrowRightAlt } from "@mui/icons-material";

const AboutUs = () => {
  return (
    <article className="py-16  w-full mx-auto bg-white mt-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center  mx-auto">
        <div className="w-full max-w-3xl relative">
          <div className="relative">
            <img
              src={experienceImage}
              alt="Modern living space with minimalist design"
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center space-y-6 max-w-3xl text-center lg:text-left">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
            EXPERIENCES
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            We Provide You The Best Experience
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            You don't have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and luxurious style and with premium quality
            materials.
          </p>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 font-semibold inline-flex items-center gap-2 transition-colors text-lg mt-4 justify-center lg:justify-start"
          >
            More Info
            <ArrowRightAlt sx={{ fontSize: 30 }} />
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center mx-auto mt-20">
        <div className="w-full max-w2xl relative">
          <div className="relative">
            <img
              src={materialsImage}
              alt="Modern dining room with quality materials"
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="w-full  flex-col  items-center justify-center max-w-xs  hidden xl:block">
          <div className="w-full">
            <img
              src={materials1Image}
              alt="Material detail 1"
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>
          <div className="w-full">
            <img
              src={materials2Image}
              alt="Material detail 2"
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center space-y-6 max-w-3xl mx-10 text-center lg:text-left">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
            MATERIALS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Very Serious
            <br /> Materials For Making Furniture
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 font-semibold inline-flex items-center gap-2 transition-colors text-lg mt-4 justify-center lg:justify-start"
          >
            More Info
            <ArrowRightAlt sx={{ fontSize: 30 }} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default AboutUs;
