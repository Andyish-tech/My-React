import Hero from "../components/Hero"
import OurCycle from "../components/OurCycle"
import ProductShowcase from "../components/ProductShowcase"

const Home = () => {
  const products = [
    {
      id: 3,
      title: "Cycles",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      image: "../../public/images/Screenshot_28-10-2025_121455_themewagon.github.io.jpeg",
      badge: "01",
      price: 200,
    },
    {
      id: 4,
      title: "Mordern Cycle",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      image: "../../public/images/Screenshot_28-10-2025_121455_themewagon.github.io.jpeg",
      badge: "03",
      price: 200,
    },
  ]

  return (
    <div>
      <Hero />
      <OurCycle />
      {products.map((product, index) => (
        <ProductShowcase key={product.id} product={product} reverse={index % 2 !== 0} />
      ))}
    </div>
  )
}

export default Home
