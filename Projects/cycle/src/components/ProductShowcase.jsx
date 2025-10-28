import { useCart } from "../context/CartContext"

const ProductShowcase = ({ product, reverse = false }) => {
  const { addToCart } = useCart()

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    })
  }

  return <section className="py-16 lg:py-24 bg-white"></section>
}

export default ProductShowcase
