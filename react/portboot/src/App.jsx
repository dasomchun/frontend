import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import "./App.css";

import About from "./Components/About";
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".slideanim").forEach((el) => {
        //.slideanim 클래스 요소 선택
        const pos = el.getBoundingClientRect().top; //offset().top과 비
        // 요소의 현재화면 상단으로 부터의 거리(px)를 구합니다. 요소가 현재 뷰포트의 어디쯤 있는지를 알수있음.
        const winHeight = window.innerHeight; //브라우저 높이
        if (pos < winHeight - 100) {
          // 요소의 위치가 화면 아래쪽에 100px 위치에 도달하면 실행
          // 스크롤 내려서 그 요소가 거의 화면안에 들어오면
          el.classList.add("slide");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
