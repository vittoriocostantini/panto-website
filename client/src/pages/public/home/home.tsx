import { Hero } from "../../../components/layout/hero";
import { WhyChoosing } from "../../../components/layout/choosing";
import { ProductsContainer } from "../../../components/layout/product-container";
import { AboutUs } from "../../../components/layout/about";
import { Testimonials } from "../../../components/layout/testimonials";


function Home() {
  return (
    <>
      <Hero />
      <WhyChoosing />
      <ProductsContainer />
      <AboutUs />
      <Testimonials />
    </>
  );
}

export default Home;
