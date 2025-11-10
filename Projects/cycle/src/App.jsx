import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductSection from "../src/components/ProductSection"
import About from "../src/components/About"
import Testimonial from "../src/components/Testimonial"
import News from "../src/components/News"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection/>
      <About />
      <Testimonial />
      <News />
      <Footer />
  </>
  );
}