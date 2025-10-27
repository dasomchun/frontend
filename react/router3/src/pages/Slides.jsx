import React, { useState } from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import SwiperSlideComponent from "./pages/Swiperslide";
import "./Slides.css";

export default function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      id: 1,
      src: "./images/s1.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "./images/s2.jpg",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "./images/s3.jpg",
      alt: "Image 3",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: true,
    fade: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="text-center mb-4">이미지 슬라이더</h2>
            <div className="slider-wrapper">
              <Slider {...settings}>
                {/* Slide 컴퍼넌트 안에 image.map(돌려 이미지 생성) */}
                {images.map((image) => (
                  <div key={image.id} className="slide-item">
                    <div className="px-2">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="img-fluid w-100"
                        style={{ height: "400px", objectFit: "cover" }}
                      />
                      <div className="slider-caption mt-2">
                        <h6>{image.alt}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="text-center mt-3">
              <p className="text-muted">
                현재 이미지: {currentSlide + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      </div>
      <SwiperSlideComponent />;
    </>
  );
}
