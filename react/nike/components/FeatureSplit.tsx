import React from 'react';

const FeatureSplit: React.FC = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-0 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Left Card */}
        <div className="relative h-[600px] md:h-[700px] w-full group overflow-hidden">
          <img 
            src="https://picsum.photos/800/1000?random=2" 
            alt="Nike Shox Z" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10">
            <h3 className="text-white text-2xl font-bold mb-6">나이키 샥스 Z</h3>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              구매하기
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative h-[600px] md:h-[700px] w-full group overflow-hidden">
          <img 
            src="https://picsum.photos/800/1000?random=3" 
            alt="Nike Shox TL" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10">
            <h3 className="text-white text-2xl font-bold mb-6">나이키 샥스 TL</h3>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              구매하기
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureSplit;