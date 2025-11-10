import React from 'react';
import { ArrowRight } from 'lucide-react'; 

// 1. Product Data Array
const products = [
  {
    id: 1,
    title: "Cycles",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    badge: "01",
    price: 200,
    layout: 'left', // Image on the left
    imageSrc: '../../public/images/10001 (1).png', 
    bikeColor: '000000', // Black bike for placeholder
  },
  {
    id: 2,
    title: "Stylis Cycle",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    badge: "02",
    price: 200,
    layout: 'right', // Image on the right
    imageSrc: '../../public/images/10002 (1).png', 
    bikeColor: 'B91C1C', // Red bike for placeholder
  },
  {
    id: 3,
    title: "Mordern Cycle",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    badge: "03",
    price: 200,
    layout: 'left', // Image on the left
    imageSrc: '../../public/images/10002 (1).png', 
    bikeColor: '4F46E5', // Indigo/Blue bike for placeholder
  },
];

// 2. Reusable Product Section Component (Now defined internally to avoid import errors)
const ProductSection = ({ product }) => {
  const isImageLeft = product.layout === 'left';
  // Custom color for the unique slanted background 
  const tanBgColor = 'bg-[#f5d1a8]'; 

  // The main container uses md:flex-row or md:flex-row-reverse to handle alternating layout
  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className={`
        container mx-auto flex flex-col items-center gap-12
        ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
      `}>
        
        {/* IMAGE CONTAINER (Visuals) */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center p-6 md:p-0 h-96 md:h-[400px]">
          
          {/* Background Shape: Slanted effect using skew-x */}
          <div className={`
            absolute top-0 bottom-0 z-0 ${tanBgColor} 
            rounded-xl shadow-lg 
            ${isImageLeft
              ? 'left-0 w-3/4 transform skew-x-[-12deg] origin-top-left translate-x-12' 
              : 'right-0 w-3/4 transform skew-x-[12deg] origin-top-right -translate-x-12' 
            }
            hidden md:block
          `} />

          {/* Product Image - Using the correct source path */}
          <img
            src={product.imageSrc} 
            alt={`${product.title} Cycle`}
            className="relative z-10 w-full max-w-sm h-auto object-contain rounded-lg shadow-2xl"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/6B7280/FFFFFF?text=Image+Missing"; }}
          />

          {/* Section Number Overlay */}
          <div className={`
            absolute top-8 z-20 bg-gray-700 text-white text-sm font-semibold 
            p-2 rounded-full h-10 w-10 flex items-center justify-center shadow-lg
            ${isImageLeft ? 'md:right-[calc(25%+1rem)] right-8' : 'md:left-[calc(25%+1rem)] left-8'}
          `}>
            {product.badge}
          </div>
        </div>

        {/* CONTENT CONTAINER (Text) */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
          <div className={`md:max-w-md ${isImageLeft ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}>
            
            {/* Decorative Line */}
            <div className="h-0.5 w-12 bg-gray-300 mb-4"></div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {product.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Action Row: Button and Price */}
            <div className="flex items-center justify-between mt-6">
              <button className="flex items-center bg-gray-800 text-white font-medium py-3 px-6 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300 transform hover:scale-[1.02]">
                Buy Now
              </button>
              <div className="text-lg font-semibold text-gray-800">
                Price <span className="text-3xl font-extrabold text-indigo-600">${product.price}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// 3. Main App Component (You might call this Home in your setup)
const App = () => {
  
  // Placeholder Header Section 
  const HeaderSection = (
    <header className="pt-20 pb-10 text-center container mx-auto px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
        Our cycle
      </h1>
      <p className="text-lg text-gray-500 max-w-xl mx-auto">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout
      </p>
    </header>
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Assuming you would use <Hero /> here */}
      {HeaderSection} 
      
      {/* Iterate over products and render a section for each */}
      {products.map((product) => (
        <ProductSection key={product.id} product={product} />
      ))}
      
      {/* Final Read More Button */}
      <div className="flex justify-center py-16">
        <button className="flex items-center bg-amber-200 text-gray-800 font-medium py-3 px-8 rounded-lg shadow-md hover:bg-amber-300 transition duration-300 group">
          Read More
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default App;