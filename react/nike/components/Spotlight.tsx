import React from 'react';

const Spotlight: React.FC = () => {
  return (
    <section className="w-full mb-20">
      <div className="w-full h-[50vh] md:h-[80vh] relative">
        <img 
            src="https://picsum.photos/1920/1080?random=20" 
            alt="LeBron"
            className="w-full h-full object-cover object-top"
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-6 mt-10 md:mt-16">
        <p className="font-bold text-sm mb-4">LeBron XXIII</p>
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">'FROM THIS POINT FORWARD'<br/>컬러웨이</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
          르브론이 '선택 받은 자'라는 뜻의 'The Chosen One'으로 불린 순간,<br className="hidden md:block" />
          '왕'의 시대는 시작되었습니다. 새로운 컬러웨이를 만나보세요.
        </p>
        <div className="flex justify-center gap-3">
          <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
            알림 받기
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
            자세히 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;