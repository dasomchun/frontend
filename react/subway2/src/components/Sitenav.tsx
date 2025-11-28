import { useState } from "react";
import type { FocusEvent, MouseEvent } from "react";
import { Link, NavLink } from "react-router-dom";

type NavItem = {
  label: string;
  path: string;
  exact?: boolean;
  subItems: { label: string; to: string }[];
};

const navItems: NavItem[] = [
  {
    label: "홈",
    path: "/",
    exact: true,
    subItems: [
      { label: "브랜드 소개", to: "/#brand" },
      { label: "오늘의 수프", to: "/#soup" },
      { label: "온라인 주문", to: "/#order" },
      { label: "지점 찾기", to: "/#stores" },
    ],
  },
  {
    label: "메뉴소개",
    path: "/menu",
    subItems: [
      { label: "샌드위치", to: "/menu#sandwich" },
      { label: "랩ㆍ기타", to: "/menu#wrap" },
      { label: "샐러드", to: "/menu#salad" },
      { label: "아침메뉴", to: "/menu#breakfast" },
      { label: "스마일 썹", to: "/menu#smile-sub" },
    ],
  },
  {
    label: "이용방법",
    path: "/how-to-order",
    subItems: [
      { label: "써브웨이 이용방법", to: "/how-to-order#guide" },
      { label: "빵 & 재료 소개", to: "/how-to-order#ingredients" },
      { label: "앱 주문 안내", to: "/how-to-order#app" },
      { label: "단체 주문", to: "/how-to-order#group" },
    ],
  },
  {
    label: "새소식",
    path: "/news",
    subItems: [
      { label: "이벤트 · 프로모션", to: "/news#event" },
      { label: "뉴스 · 공지사항", to: "/news#notice" },
      { label: "광고 영상", to: "/news#media" },
      { label: "브랜드 캠페인", to: "/news#campaign" },
    ],
  },
  {
    label: "가맹점",
    path: "/franchise",
    subItems: [
      { label: "가맹 절차", to: "/franchise#process" },
      { label: "투자 비용", to: "/franchise#investment" },
      { label: "지사 안내", to: "/franchise#branch" },
      { label: "사업 설명회", to: "/franchise#seminar" },
      { label: "FAQ", to: "/franchise#faq" },
    ],
  },
];

export default function Sitenav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null
  );
  // `SiteNav` 컴포넌트는 총 **3개의 state**를 사용하여 데스크톱 메가메뉴와 모바일 아코디언 메뉴를 제어합니다.

  // 1. `hoveredItem` - 데스크톱 메가메뉴 제어
  // 2. `isMobileNavOpen` - 모바일 메뉴 열림/닫힘 제어
  // 3. `expandedMobileItem` - 모바일 아코디언 서브메뉴 제어

  // isMobileNavOpen(모바일메뉴 열림/닫힘), expandedMobileItem(서브 메뉴 전환에 필요한 상태)
  // expandedMobileItem (서브메뉴 전환에 필요한 상태) -모바일 메뉴 중 어떤 항목 펼쳐졌는지 추적(아코디언제어)

  //   **1. 햄버거 버튼 클릭**
  // ```typescript
  // const toggleMobileNav = () => {
  //   setIsMobileNavOpen((prev) => !prev)
  //   setExpandedMobileItem(null)  // 서브메뉴도 모두 닫음
  // }
  // ```
  // - 햄버거 메뉴 버튼을 클릭하면 이전 값의 반대로 토글
  // - 메뉴를 열 때는 모든 서브메뉴를 닫은 상태로 시작 (`expandedMobileItem = null`)

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
    setExpandedMobileItem(null);
    // 메뉴를 열때 모든 서브메뉴를 닫은상태로 시작
  };
  // isMobilenavOpen은 메뉴가 열렸는지(true),닫혔는지(false) 상태를 저장
  // true - 메뉴열기 false =  메뉴닫기
  // expandedMobileItem 모바일 메뉴안의 펼쳐진 서브 메뉴 항목을 관리하는 state
  // null로 초기화 하면
  const handleMobileLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget; //클릭된 <a> 요소를 가져와서
    if (target.closest(".mobile-nav")) {
      //해당 <a> 요소가 .mobile-nav 내부에 있는지 확인
      setIsMobileNavOpen(false); //모바일 내비 메뉴 닫기
      setExpandedMobileItem(null); //확장된 메뉴 상태 초기화
    }
  };
  // **2. 모바일 메뉴 내 링크 클릭**
  // ```typescript
  // const handleMobileLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
  //   const target = event.currentTarget
  //   if (target.closest('.mobile-nav')) {
  //     setIsMobileNavOpen(false)  // 메뉴 닫기
  //     setExpandedMobileItem(null)  // 서브메뉴도 닫기
  //   }
  // }
  // ```
  // - 모바일 메뉴 내의 어떤 링크를 클릭해도 메뉴가 자동으로 닫힘
  // - 사용자가 페이지를 이동했으므로 메뉴를 닫아야 함

  // ### 🔗 사용되는 곳

  // **1. 햄버거 버튼의 접근성 속성**
  // ```typescript
  // <button
  //   type="button"
  //   className="mobile-nav-toggle"
  //   aria-expanded={isMobileNavOpen}
  //   onClick={toggleMobileNav}
  // >
  // ```
  // - `aria-expanded` 속성으로 스크린 리더에 메뉴 상태를 알림
  // - `true`: 메뉴가 열려 있음, `false`: 메뉴가 닫혀 있음

  const handleMobileItemToggle = (label: string) => {
    setExpandedMobileItem((prev) => (prev === label ? null : label));
  };

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container brand-container">
          <div className="brand">
            <span className="brand-primary">Subway</span>
            <span className="brand-secondary">Fresh Choice</span>
          </div>
        </div>
      </div>
      <div
        className="header-nav"
        onMouseLeave={() => setHoveredItem(null)}
        onBlur={(event: FocusEvent<HTMLDivElement>) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setHoveredItem(null);
          }
        }}
        // onMouseLeave -> 마우스가 메뉴 영역 밖으로 나가면 닫힘
        // onBlur : 키보드 탐색중 포커스가 다른 요소로 이동해도 닫힘
        // null 어떤값도 선택되지 않은 상태
        // 메뉴에서 마우스가 빠져나가면 벗아나면 상태를 초기화
      >
        <div className="container desktop-nav-container">
          <nav className="site-nav desktop-nav">
            <ul className="top-nav">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="nav-item"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onFocus={() => setHoveredItem(item.label)}
                  // hoveredItem 상태가 업데이트 됨 -> 서브(메가메뉴 열림)
                >
                  <NavLink
                    to={item.path}
                    end={item.exact}
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                  >
                    {item.label}
                  </NavLink>
                  {/* navItEM 배열을 기반으로 홈,메뉴소개,회사소개 이용방법 새소식 등 링크를 생성 */}
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={isMobileNavOpen}
            onClick={toggleMobileNav}
          >
            <span className="sr-only">메뉴 열기</span>
            {/* sr-only 앱 접근성 */}
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <nav
          className="mobile-nav"
          data-open={isMobileNavOpen ? "true" : "false"}
          //data-open이 true일시 max-height 640으로 변경
        >
          <ul>
            {navItems.map((item, index) => {
              const isExpanded = expandedMobileItem === item.label;
              const panelId = `mobile-sub-nav-${index}`;
              return (
                <li
                  key={item.label}
                  className="mobile-nav-item"
                  data-expanded={isExpanded ? "true" : "false"}
                >
                  <div className="mobile-nav-top">
                    <NavLink
                      to={item.path}
                      end={item.exact}
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                      onClick={handleMobileLinkClick}
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      className="mobile-accordion-trigger"
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      onClick={() => handleMobileItemToggle(item.label)}
                    >
                      <span className="sr-only">
                        {isExpanded
                          ? `${item.label} 메뉴 닫기`
                          : `${item.label} 메뉴 열기`}
                      </span>
                      <span aria-hidden="true"></span>
                    </button>
                  </div>
                  <ul
                    id={panelId}
                    className="mobile-sub-nav"
                    data-open={isExpanded ? "true" : "false"}
                  >
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.label}
                          className="dropdown-link"
                          onClick={handleMobileLinkClick}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* [data-open="true"] 상태시 mega-menu가 표시 */}
        <div className="mega-menu" data-open={hoveredItem ? "true" : "false"}>
          <div className="mega-menu-inner">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`mega-column${
                  hoveredItem === item.label ? " mega-column-active" : ""
                }`}
                onMouseEnter={() => setHoveredItem(item.label)}
                onFocus={() => setHoveredItem(item.label)}
              >
                <span className="mega-heading">{item.label}</span>
                <ul>
                  {item.subItems.map((subItem) => (
                    <li key={subItem.label}>
                      <Link to={subItem.to} className="dropdown-link">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
