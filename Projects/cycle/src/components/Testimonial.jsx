import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Example static testimonial data (for simplicity, we only show one)
const testimonialData = {
  quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  name: "Channery",
  image: "https://placehold.co/150x200/404040/FFFFFF?text=Customer", // Placeholder image for the customer
};

export default function TestimonialSection() {
  // Orange color based on the screenshot buttons
  const orangeBg = 'bg-[#f7c17b]';
  const orangeHover = 'hover:bg-amber-400';

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 tracking-tight">
          Says Customers
        </h2>

        {/* Testimonial Card */}
        <div className="flex justify-center">
          <div className="
            w-full max-w-4xl bg-white shadow-xl rounded-xl p-4 md:p-8 border 
            border-gray-100 flex flex-col md:flex-row items-center transition-all duration-500
          ">
            
            {/* Customer Image */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 border-r-4 border-gray-100 pr-8">
              <img
                src={testimonialData.image}
                alt={testimonialData.name}
                className="w-32 h-40 object-cover rounded-lg shadow-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x200/404040/FFFFFF?text=Customer"; }}
              />
            </div>

            {/* Quote and Name */}
            <div className="text-left flex-grow">
              {/* Quote Mark */}
              <p className={`text-5xl font-extrabold ${orangeBg} text-white inline-block px-3 py-1 -mt-10 mb-4 rounded-lg`}>
                &ldquo;
              </p>
              
              {/* Quote Text */}
              <p className="text-lg text-gray-600 mb-4 italic leading-relaxed">
                {testimonialData.quote}
              </p>
              
              {/* Customer Name */}
              <p className="text-xl font-bold text-gray-800">
                {testimonialData.name}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-6 mt-12">
          <button className={`p-4 rounded-lg ${orangeBg} ${orangeHover} text-white shadow-md transition duration-200`}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className={`p-4 rounded-lg ${orangeBg} ${orangeHover} text-white shadow-md transition duration-200`}>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}