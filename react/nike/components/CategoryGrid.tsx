import React from 'react';

const categories = [
  { name: '남성 의류', img: 'https://picsum.photos/600/800?random=10' },
  { name: '여성 의류', img: 'https://picsum.photos/600/800?random=11' },
  { name: '키즈 의류', img: 'https://picsum.photos/600/800?random=12' },
  { name: '나이키 용품', img: 'https://picsum.photos/600/800?random=13' },
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="cursor-pointer group">
            <div className="overflow-hidden aspect-[3/4] mb-4 relative">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-medium pl-1">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;