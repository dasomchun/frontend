import React, { useState } from 'react';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { title: 'Fintech Dashboard', category: 'Web App', imageUrl: 'https://picsum.photos/600/400?random=3' },
  { title: 'Travel Explorer', category: 'Mobile UI', imageUrl: 'https://picsum.photos/600/400?random=4' },
  { title: 'Eco Commerce', category: 'Branding', imageUrl: 'https://picsum.photos/600/400?random=5' },
  { title: 'Health Tracker', category: 'Web App', imageUrl: 'https://picsum.photos/600/400?random=6' },
  { title: 'Modern Estate', category: 'Marketing', imageUrl: 'https://picsum.photos/600/400?random=7' },
  { title: 'Social Connect', category: 'Mobile UI', imageUrl: 'https://picsum.photos/600/400?random=8' },
];

const categories = ['All', 'Web App', 'Mobile UI', 'Branding', 'Marketing'];

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
           <h4 className="text-blue-600 font-bold uppercase tracking-wide text-sm mb-2">Portfolio</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Works</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-400 text-sm font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;