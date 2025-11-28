// ...existing code...
import React, { useRef, useState } from "react";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerHeight = headerRef.current?.offsetHeight ?? 0;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = Math.max(0, elementPosition - headerHeight);
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  // sample people for the mega menu
  const people = [
    {
      name: "지훈 김",
      title: "프로 러너 · 스피드 코치",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "수진 이",
      title: "트레이너 · 퍼포먼스 전문가",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "민재 박",
      title: "제품 디자이너 · 기능 테스트",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <header ref={headerRef} className="relative w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#f5f5f5] h-9 px-4 hidden md:flex justify-between items-center text-[11px] font-medium text-gray-600">
        <div className="flex items-center gap-4">
          <span className="cursor-pointer hover:text-black">Jordan</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-black">
            매장 찾기
          </a>
          <span className="w-[1px] h-3 bg-gray-300"></span>
          <a href="#" className="hover:text-black">
            고객센터
          </a>
          <span className="w-[1px] h-3 bg-gray-300"></span>
          <a href="#" className="hover:text-black">
            가입하기
          </a>
          <span className="w-[1px] h-3 bg-gray-300"></span>
          <a href="#" className="hover:text-black">
            로그인
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white h-16 px-4 md:px-10 flex items-center justify-between border-b border-transparent sticky top-0 z-50">
        {/* Logo */}
        <div className="flex-shrink-0">
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M21 8.25c-6-1.5-12-1.5-12 3.75s6 3.75 12-3.75z"
              fill="none"
            />
            {/* Simple Nike Swoosh Approximation for demo */}
            <path d="M6.2 14.8c-2.8 1.2-4.2 0-4.2 0l16.8-7.8c0 0-3.8 0.6-5.8 2.4-2.8 2.4-4.8 4.8-6.8 5.4z" />
          </svg>
        </div>

        {/* Desktop Links - New 버튼에서 메뉴 오픈 */}
        <nav
          className="hidden md:flex items-center gap-6 font-medium text-black text-base absolute left-1/2 transform -translate-x-1/2"
          onMouseLeave={() => setMenuOpen(false)}
        >
          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setMenuOpen(true)}
              onClick={() => setMenuOpen((s) => !s)}
              className="hover:opacity-70"
            >
              New
            </button>

            {/* Mega menu */}
            {menuOpen && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[860px] bg-white shadow-lg rounded-lg p-6 z-50"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <div className="grid grid-cols-3 gap-4">
                  {people.map((p) => (
                    <div
                      key={p.name}
                      className="flex flex-col items-center text-center bg-gray-50 rounded-md p-4 hover:shadow-md transition"
                    >
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-20 h-20 rounded-full object-cover mb-3"
                      />
                      <div className="font-semibold text-sm">{p.name}</div>
                      <div className="text-xs text-gray-500 mb-3">
                        {p.title}
                      </div>
                      <p className="text-[13px] text-gray-600 mb-3">
                        이 사람은 신제품을 테스트하고 추천하는 전문가입니다.
                        스타일과 기능을 확인해보세요.
                      </p>
                      <button
                        type="button"
                        className="text-sm bg-black text-white px-3 py-1 rounded-full"
                        onClick={() => {
                          // 예시 CTA: 상세 페이지로 스크롤 (id 예: person-지훈)
                          const targetId = p.name.split(" ")[0].toLowerCase();
                          const el = document.getElementById(targetId);
                          if (el) {
                            const headerHeight =
                              headerRef.current?.offsetHeight ?? 0;
                            const pos =
                              el.getBoundingClientRect().top +
                              window.pageYOffset -
                              headerHeight;
                            window.scrollTo({ top: pos, behavior: "smooth" });
                          } else {
                            setMenuOpen(false);
                          }
                        }}
                      >
                        더보기
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => scrollToId("men")}
            className="hover:opacity-70"
          >
            Men
          </button>
          <button
            type="button"
            onClick={() => scrollToId("women")}
            className="hover:opacity-70"
          >
            Women
          </button>
          <button
            type="button"
            onClick={() => scrollToId("kids")}
            className="hover:opacity-70"
          >
            Kids
          </button>
          <button
            type="button"
            onClick={() => scrollToId("jordan")}
            className="hover:opacity-70"
          >
            Jordan
          </button>
          <button
            type="button"
            onClick={() => scrollToId("sale")}
            className="hover:opacity-70"
          >
            Sale
          </button>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center bg-[#f5f5f5] rounded-full px-3 py-1.5 w-44 hover:bg-[#e5e5e5] transition">
            <Search className="w-5 h-5 text-black" />
            <input
              type="text"
              placeholder="검색"
              className="bg-transparent border-none outline-none text-sm ml-2 w-full placeholder-gray-500 font-medium"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ShoppingBag className="w-6 h-6" />
          </button>
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="bg-[#f5f5f5] py-2 text-center text-xs md:text-sm font-medium border-b border-gray-200">
        <p>대학생 할인 프로그램 안내</p>
        <a
          href="#"
          className="text-[11px] underline mt-0.5 inline-block font-semibold"
        >
          자세히 보기
        </a>
      </div>
    </header>
  );
};

export default Header;
// ...existing code...
