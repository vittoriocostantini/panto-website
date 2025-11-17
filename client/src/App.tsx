import "./App.css";
import {
  Header,
  Hero,
  WhyChoosing,
  ProductsContainer,
  AboutUs,
  Testimonials,
  Footer,
} from "./components/layout";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <WhyChoosing />
      <ProductsContainer />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
