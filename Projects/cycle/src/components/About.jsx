import React from 'react';

// 3. About Section Component
// Handles the background image, dark overlay, centered content, and tilted inner image.
export default function AboutSection() {
  // Use a different placeholder image URL for the background 
  const bgImageUrl = "../../public/images/10002 (1).png";
  // Assuming a blue bike image for the centered element
  const bikeImageUrl = "https://placehold.co/400x300/3B82F6/FFFFFF?text=Blue+Bike"; 

  return (
    <section 
      className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
          About Our cycle Store
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        
        {/* Bike Image on white background with perspective */}
        <div className="relative w-full max-w-lg mx-auto mb-10">
          <div className="
            relative p-4 md:p-6 bg-white shadow-2xl mx-auto
            /* Tilted container effect */
            transform skew-x-[-8deg] rotate-[2deg] translate-x-[-10px]
          ">
            <img
              src={bikeImageUrl} 
              alt="Mountain Bike"
              className="w-full h-auto object-contain 
                /* Reverse tilt to straighten the image */
                transform skew-x-[8deg] rotate-[-2deg]"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/3B82F6/FFFFFF?text=Blue+Bike"; }}
            />
          </div>
        </div>

        {/* Read More Button */}
        <button className="inline-flex items-center bg-[#f7c17b] text-gray-900 font-bold py-3 px-10 rounded-lg shadow-xl hover:bg-amber-400 transition duration-300 transform hover:scale-105">
          Read More
        </button>
      </div>
    </section>
  );
};