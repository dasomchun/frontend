import React from "react";
import Basicslider from "./components/Basicslider";
import Autoplayslider from "./components/Autoplayslider";
import "./App.css";
import Fadeslider from "./components/Fadeslider";
import Multiplslider from "./components/Multiplslider";
import Thumbnailslider from "./components/Thumbnailslider";
import ResponsiveSlider from "./components/Responsive";
import Customnavslider from "./components/Customnavslider";
import Fontawesome from "./components/Fontawesome";
import ImageArrow from "./components/ImageArrow";

export default function App() {
  return (
    <div className="container">
      <h1>Slick Slider 종류별 예제</h1>

      <section className="slider-section">
        <h2>1. 기본 슬라이더(Basic Slider)</h2>
        <Basicslider />
      </section>

      <section className="slider-section">
        <h2>2. 자동재생 슬라이더(Autoplay Slider)</h2>
        <Autoplayslider />
      </section>
      <section className="slider-section">
        <h2>3. 페이드 슬라이더(Fade Slider)</h2>
        <Fadeslider />
      </section>
      <section className="slider-section">
        <h2>4. 다중 슬라이드 슬라이더(Multiple Slider)</h2>
        <Multiplslider />
      </section>
      <section className="slider-section">
        <h2>5. 썸네일 네비게이션 슬라이더 (Thumbnail Navigation)</h2>
        <Thumbnailslider />
      </section>
      <section className="slider-section">
        <h2>6. 리스폰시브 슬라이더 (Responsive Navigation)</h2>
        <ResponsiveSlider />
      </section>
      <section className="slider-section">
        <h2>7. 커스텀NAV 슬라이더 (CustomNav Navigation)</h2>
        <Customnavslider />
      </section>
      <section className="slider-section">
        <h2>8. 폰트어썸 슬라이더 (Fontawesome Navigation)</h2>
        <Fontawesome />
      </section>
      <section className="slider-section">
        <h2>9. 이미지 화살표 & 가로 &세로 슬라이더 (ImageArrow Navigation)</h2>
        <ImageArrow />
      </section>
    </div>
  );
}
