import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CustomNavSlider = () => {
  const swiperRef = useRef(null);

  const slides = [
    { id: 1, image: "/images/math_img_1.jpg" },
    { id: 2, image: "/images/math_img_2.jpg" },
    { id: 3, image: "/images/math_img_3.jpg" },
  ];

  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="custom-nav-swiper-container">
      <div className="custom-nav-buttons">
        <button className="custom-prev-btn" onClick={goToPrev}>
          ← 이전
        </button>
        <button className="custom-next-btn" onClick={goToNext}>
          다음 →
        </button>
      </div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          //   현재 슬라이드 상태를 나타내줌
        }}
        className="custom-nav-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img
                src={slide.image}
                alt={`Custom Nav Slide ${slide.id}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomNavSlider;
// 초기상태
// 1. const swiperRef = useRed(null); //아직 아무기술 없음
// 2.Swiper 초기화 후 (onSlider 콜백을 실행)
// swiperRef.current = swiper  // Swiper 인스턴스 객체가 저장됨
// 3. 버튼 클릭시
// swiperRef.current.slidePrev() //  이전 슬라이드로 이동
// swiperRef.current.slideNext() //다음 슬라이드로 이동
