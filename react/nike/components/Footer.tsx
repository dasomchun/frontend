import React, { useState } from 'react';
import { Plus, Minus, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (window.innerWidth < 768) {
      setExpandedSection(expandedSection === section ? null : section);
    }
  };

  const LinkGroup = ({ title, links }: { title: string, links: string[] }) => (
    <div className="border-b border-gray-800 md:border-none pb-4 md:pb-0 mb-4 md:mb-0">
      <div 
        className="flex justify-between items-center cursor-pointer md:cursor-default"
        onClick={() => toggleSection(title)}
      >
        <h4 className="text-white font-bold text-sm md:mb-4 uppercase tracking-tighter">{title}</h4>
        <div className="md:hidden text-white">
          {expandedSection === title ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </div>
      <ul className={`mt-2 md:block ${expandedSection === title ? 'block' : 'hidden'} text-xs text-gray-400 space-y-2 font-medium`}>
        {links.map(link => (
          <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-[#111111] text-white pt-12 pb-8 px-6 md:px-12">
      {/* Top Links */}
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-gray-800 md:border-none">
        
        {/* Main Columns */}
        <div className="space-y-4">
             <h4 className="text-white font-bold text-sm uppercase tracking-tighter">새로운 소식</h4>
             <h4 className="text-white font-bold text-sm uppercase tracking-tighter">멤버가입</h4>
             <h4 className="text-white font-bold text-sm uppercase tracking-tighter">매장안내</h4>
             <h4 className="text-white font-bold text-sm uppercase tracking-tighter">나이키 저널</h4>
        </div>

        <LinkGroup 
            title="도움말" 
            links={['주문배송조회', '반품 정책', '결제 방법', '공지사항', '문의하기']} 
        />

        <LinkGroup 
            title="회사소개" 
            links={['About Nike', '소식', '채용', '투자자', '지속가능성', '코칭', '신고하기']} 
        />

         <div className="md:text-right">
             <div className="flex items-center md:justify-end gap-2 text-gray-400 text-xs mb-4">
                <Globe size={16} />
                <span>대한민국</span>
             </div>
         </div>
      </div>

      {/* Bottom Legal */}
      <div className="max-w-[1920px] mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between gap-8 md:gap-4">
         <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs text-gray-500">
            <span>© 2025 Nike, Inc. All Rights Reserved</span>
            <div className="flex flex-wrap gap-4">
                <a href="#" className="hover:text-white">이용약관</a>
                <a href="#" className="hover:text-white font-bold">개인정보처리방침</a>
                <a href="#" className="hover:text-white">위치정보이용약관</a>
                <a href="#" className="hover:text-white">영상정보처리기기 운영 방침</a>
            </div>
         </div>
      </div>

      {/* Extended Legal Text (Korean Specific) */}
      <div className="max-w-[1920px] mx-auto mt-8 text-[10px] text-gray-600 leading-relaxed border-t border-gray-800 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <p>(유)나이키코리아 대표 귀중원 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 | 통신판매업신고번호 2011-서울강남-03461 | 사업자등록번호 220-88-09068 <a href="#" className="underline">사업자 정보 확인</a></p>
                <p className="mt-1">고객센터 전화 문의 <a href="#" className="underline">080-022-0182</a> FAX 02-6744-5880 | 이메일 <a href="#" className="underline">service@nike.co.kr</a> | 호스팅서비스사업자 (유)나이키코리아</p>
            </div>
            <div>
                <p>현금 등으로 결제 시 안전 거래를 위해 나이키 쇼핑몰에서 가입하신 한국결제네트웍스 유한회사의 구매안전 서비스(결제대금예치)를 이용하실 수 있습니다.</p>
                <p className="mt-1"><a href="#" className="underline">콘텐츠산업진흥법에 의한 콘텐츠 보호 안내 자세히 보기</a></p>
            </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;