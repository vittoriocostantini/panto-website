import mainOrange from "../../assets/main-principal.png";
import SearchBar from "./search-bar";

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      aria-label="Hero section with interior design promotion"
    >
      <img src={mainOrange} alt="Hero section background" className="absolute inset-0 w-full h-full object-cover" />

      <div className="relative z-10 mx-auto px-6 text-center self-start mt-20  text-white">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
          Make Your Interior More
          <br />
          Minimalistic & Modern
        </h1>
        <p className="text-lg  md:text-xl lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
          Turn your room with panto into a lot more minimalist
          and modern with ease and speed
        </p>
        <SearchBar />
      </div>
    </section>
  );
}

export default Hero;
