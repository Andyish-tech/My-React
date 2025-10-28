"use client"

import { useState, useEffect } from "react"
import { useCart } from "../context/CartContext"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { addToCart } = useCart()

  const slides = [
    {
      id: 1,
      title: "New Model Cycle",
      description: "It is a long established fact that a reader will be distracted by the readable content",
      image: "../../public/images/Screenshot_28-10-2025_121455_themewagon.github.io.jpeg",
      badge: "BEST",
      price: 299,
    },
    {
      id: 2,
      title: "Mountain Bike Pro",
      description: "Experience the thrill of off-road cycling with our premium mountain bikes",
      image: "../../public/images/Screenshot_28-10-2025_121455_themewagon.github.io.jpeg",
      badge: "NEW",
      price: 399,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleShopNow = () => {
    addToCart({
      id: slides[currentSlide].id,
      name: slides[currentSlide].title,
      price: slides[currentSlide].price,
      image: slides[currentSlide].image,
    })
  }

  return (
    <section id="home" className="relative h-screen bg-[#3D5A5C] overflow-hidden pt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        
      </div>
    </section>
  )
}

export default Hero
