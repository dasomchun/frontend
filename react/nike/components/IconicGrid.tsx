import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const iconics = [
  { name: '덩크', img: 'https://picsum.photos/400/400?random=40' },
  { name: '에어 조던 1', img: 'https://picsum.photos/400/400?random=41' },
  { name: '에어 포스 1', img: 'https://picsum.photos/400/400?random=42' },
  { name: '아스트로그래버', img: 'https://picsum.photos/400/400?random=43' },
  { name: '에어맥스', img: 'https://picsum.photos/400/400?random=44' },
  { name: '블레이저', img: 'https://picsum.photos/400/400?random=45' },
  { name: '보메로', img: 'https://picsum.photos/400/400?random=46' },
];

const IconicGrid: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 mb-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium">Always Iconic</h2>
        <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50">
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory"
      >
        {iconics.map((item, idx) => (
          <div key={idx} className="flex-none w-[300px] snap-start group cursor-pointer">
            <div className="bg-[#f5f5f5] aspect-square mb-6 overflow-hidden relative">
               {idx === 2 && <span className="absolute top-4 right-4 bg-gray-500 text-white text-xs px-2 py-1 rounded">1/11</span>}
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-contain mix-blend-multiply p-8 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-medium text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconicGrid;