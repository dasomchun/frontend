// ...existing code...
import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://picsum.photos/id/1018/1920/1080",
  "https://picsum.photos/id/1025/1920/1080",
  "https://picsum.photos/id/1035/1920/1080",
];

const SLIDE_MS = 5000; // 한 장 보여주는 시간 (ms)
const FADE_MS = 800; // 페이드 전환 시간 (ms)

const Hero = (): JSX.Element => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!paused) {
      timerRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, SLIDE_MS);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [paused]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <style>{`
        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity ${FADE_MS}ms ease-in-out;
          pointer-events: none;
        }
        .hero-img.active {
          opacity: 1;
          pointer-events: auto;
        }
        /* optional dim overlay for text readability */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.45));
          pointer-events: none;
        }
      `}</style>

      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`hero-${i}`}
          className={`hero-img ${i === index ? "active" : ""}`}
          onError={() => console.warn("Hero image failed to load:", src)}
          aria-hidden={i === index ? "false" : "true"}
        />
      ))}

      <div className="hero-overlay" />

      <div className="absolute inset-0 flex flex-col justify-end items-start p-6 md:p-12 pb-16 md:pb-20 text-white max-w-7xl mx-auto w-full">
        <div className="w-full text-center md:text-left md:ml-10 mb-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
            멈추지 않는 러닝
          </h1>
          <p className="text-sm md:text-lg mb-8 max-w-xl mx-auto md:mx-0 font-medium">
            방수 기능과 반사 디테일, 모든 지형에서 안정적인 접지력으로 겨울에도
            문제없이 러닝을 이어나가 보세요.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            구매하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// ...existing code...
