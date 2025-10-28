import { useCart } from "../context/CartContext"

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, isCartOpen, toggleCart } = useCart()

  if (!isCartOpen) return null

  return <></>
}

export default Cart
