import {  ArrowRightAlt } from "@mui/icons-material";

const WhyChoosing = () => {
  const features = [
    {
      title: "Luxury facilities",
      description: "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
    },
    {
      title: "Affordable Price",
      description: "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
    },
    {
      title: "Many Choices",
      description: "We provide many unique work space choices so that you can choose the workspace to your liking.",
    },
  ];

  return (
    <section className="py-16 px-6  w-full mx-auto m-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <h2 className="lg:w-1/3 text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Why
          <br />
          <span className="text-5xl md:text-6xl lg:text-5xl">Choosing Us</span>
        </h2>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                {feature.description}
              </p>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center gap-2 transition-colors"
              >
                More Info
               <ArrowRightAlt sx={{ fontSize: 30 }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoosing;
