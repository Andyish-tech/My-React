import React from 'react';

// Sample data for the news cards
const newsArticles = [
  {
    id: 1,
    title: "Speed cycle",
    author: "Den",
    date: "20-12-2019",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    image: "https://placehold.co/400x250/34495e/FFFFFF?text=Mountain+Biking",
  },
  {
    id: 2,
    title: "Speed cycle",
    author: "Den",
    date: "20-12-2019",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    image: "https://placehold.co/400x250/2c3e50/FFFFFF?text=Road+Cycling",
  },
  {
    id: 3,
    title: "Jaump cycle",
    author: "Den",
    date: "20-12-2019",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    image: "https://placehold.co/400x250/1abc9c/FFFFFF?text=Dirt+Jumping",
  },
];

// Reusable component for a single news card
const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:shadow-2xl hover:scale-[1.01] transition duration-300">
      
      {/* Image */}
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/6B7280/FFFFFF?text=News+Image"; }}
      />
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {article.title}
        </h3>
        
        {/* Meta Info */}
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <p className="font-medium">Post by: {article.author}</p>
          <p>{article.date}</p>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {article.description}
        </p>
      </div>
    </div>
  );
};

export default function NewsSection() {
  // Custom dark teal color for the background
  const darkTealBg = 'bg-[#374e53]'; 

  return (
    <section className={`py-20 md:py-32 ${darkTealBg} overflow-hidden`}>
      <div className="container mx-auto px-6 text-center">
        
        {/* Header Content */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            News
          </h2>
          <p className="text-lg text-gray-300">
            it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </section>
  );
}