import React from 'react';

const Trending: React.FC = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 mb-20">
      <h2 className="text-2xl font-medium mb-6">Trending Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Card 1 */}
        <div className="relative group aspect-[4/5] md:aspect-auto md:h-[700px] overflow-hidden">
          <img 
            src="https://picsum.photos/800/1000?random=30" 
            alt="Nike Free 2025" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-10">
            <h3 className="text-white text-xl font-medium mb-6">나이키 프리 2025</h3>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              구매하기
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group aspect-[4/5] md:aspect-auto md:h-[700px] overflow-hidden">
          <img 
            src="https://picsum.photos/800/1000?random=31" 
            alt="Trail Running" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-10">
            <h3 className="text-white text-xl font-medium mb-6">겨울용 트레일 러닝화</h3>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              구매하기
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group aspect-[4/5] md:aspect-auto md:h-[700px] overflow-hidden">
          <img 
            src="https://picsum.photos/800/1000?random=32" 
            alt="Swift Collection" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-10">
            <h3 className="text-white text-xl font-medium mb-6">나이키 스위프트 컬렉션</h3>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              구매하기
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Trending;