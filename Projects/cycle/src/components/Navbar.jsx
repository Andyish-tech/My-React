"use client"

import { useState } from "react"
import { useCart } from "../context/CartContext"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getCartCount, toggleCart } = useCart()

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Cycle", href: "#our-cycle" },
    { name: "Shop", href: "#shop" },
    { name: "News", href: "#news" },
    { name: "Contact Us", href: "#contact" },
  ]

  return <></>
}

export default Navbar
