import React from "react";
import "./App.css";
import Basicslider from "./conponents/Basicslider";
import Autoplayslider from "./conponents/Autoplayslider";
import Fadeslider from "./conponents/Fadeslider";
import MultipleSlider from "./conponents/MultipleSlider";
import ThumbnailSlider from "./conponents/ThumbnailSlider";
import ResponsiveSlider from "./conponents/ResponsiveSlider";
import CustomNavSlider from "./conponents/CustomNavSlider";
import FontawesomeSlider from "./conponents/FontawesomeSlider";
import ImageArrowSlider from "./conponents/ImagearrowSlider";

export default function App() {
  return (
    <div className="container">
      <h1>
        Swiper Slider 종류별 예제
        <section className="slider-section">
          <h2>1.기본 슬라이더 (Basic Slider)</h2>
          <Basicslider />
        </section>
        <section className="slider-section">
          <h2>2.오토 슬라이더 (Auto Slider)</h2>
          <Autoplayslider />
        </section>
        <section className="slider-section">
          <h2>3.페이드효과 슬라이더 (Fade Slider)</h2>
          <Fadeslider />
        </section>
        <section className="slider-section">
          <h2>4.멀티플 슬라이더 (Multiple Slider)</h2>
          <MultipleSlider />
        </section>
        <section className="slider-section">
          <h2>5.썸네일 슬라이더 (Thumbnail Slider)</h2>
          <ThumbnailSlider />
        </section>
        <section className="slider-section">
          <h2>6.반응형 슬라이더 (Responsive Slider)</h2>
          <ResponsiveSlider />
        </section>
        <section className="slider-section">
          <h2>7.커스텀 슬라이더 (Custom Slider)</h2>
          <CustomNavSlider />
        </section>
        <section className="slider-section fontawesome-section">
          <h2>8. Font Awesome 화살표 슬라이더 (Font Awesome Arrows)</h2>
          <FontawesomeSlider />
        </section>
        <section className="slider-section fontawesome-section">
          <h2>10. 이미지 화살표(Image Arrows)</h2>
          <ImageArrowSlider />
        </section>
      </h1>
    </div>
  );
}
