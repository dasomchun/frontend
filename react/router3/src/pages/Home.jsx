import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import SwiperSlideComponent from "./pages/Swiperslide";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        {/* <div className="images">
          <img src="./images/s1.jpg" alt="" />
          <img src="./images/s2.jpg" alt="" />
          <img src="./images/s3.jpg" alt="" />
        </div> */}
        <h1>홈 페이지</h1>
        <p>
          React Router를 사용한 다중 페이지 애플리케이션에 오신 것을 환영합니다!
        </p>
        <div className="feature-cards">
          <div className="card">
            <h3>빠른 탐색</h3>
            <p>React Router로 매끄러운 페이지 이동을 경험하세요.</p>
          </div>
          <div className="card">
            <h3>SEO 친화적</h3>
            <p>각 페이지에 고유한 URL을 제공합니다.</p>
          </div>
          <div className="card">
            <h3>사용자 경험</h3>
            <p>전환 없이 빠른 페이지 이동을 제공합니다.</p>
          </div>
        </div>
        <div className="dta-section">
          <Link to="/poducts" className="cta-button">
            상품보기
          </Link>
        </div>
      </div>
      <Swiperslide />
    </>
  );
}
