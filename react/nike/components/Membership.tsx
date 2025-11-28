import React from 'react';

const Membership: React.FC = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 mb-24">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-medium">나이키 멤버십</h2>
        <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-100 disabled:opacity-30" disabled>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="relative group bg-gray-900 cursor-pointer aspect-[3/2] md:aspect-square lg:aspect-[3/2]">
           <img src="https://picsum.photos/600/400?random=50" className="w-full h-full object-cover opacity-80" alt="Member Rewards" />
           <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-medium mb-1">멤버 리워드</p>
                <h3 className="text-xl md:text-2xl font-bold mb-6">운동과 쇼핑을 위한 특별한 혜택</h3>
                <button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gray-200">자세히 보기</button>
           </div>
        </div>

        {/* Card 2 */}
        <div className="relative group bg-gray-900 cursor-pointer aspect-[3/2] md:aspect-square lg:aspect-[3/2]">
           <img src="https://picsum.photos/600/400?random=51" className="w-full h-full object-cover opacity-80" alt="Sports & Wellness" />
           <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-medium mb-1">스포츠 & 웰니스 앱</p>
                <h3 className="text-xl md:text-2xl font-bold mb-6">언제 어디서든 운동하기</h3>
                <button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gray-200">함께 운동하기</button>
           </div>
        </div>

        {/* Card 3 */}
        <div className="relative group bg-gray-900 cursor-pointer aspect-[3/2] md:aspect-square lg:aspect-[3/2]">
           <img src="https://picsum.photos/600/400?random=52" className="w-full h-full object-cover opacity-80" alt="SNKRS" />
           <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-medium mb-1">SNKRS</p>
                <h3 className="text-xl md:text-2xl font-bold mb-6">최고의 스니커즈 커뮤니티</h3>
                <button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gray-200">자세히 보기</button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;