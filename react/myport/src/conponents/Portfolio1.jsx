import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio1.css";

export default function Portfolio1() {
  return (
    <div id="portfolio1" className="portfolio1-section">
      <header>
        <h3>PortFolio1</h3>
      </header>
      <div className="container">
        <div className="port1-title">
          <h3>홈페이지</h3>
        </div>
        <div className="port1-images">
          <a href="https://www.subway.co.kr/">
            <img src="../images/b1.jpg" alt="" />
          </a>
          <a href="https://www.subway.co.kr/">
            <img src="../images/b2.jpg" alt="" />
          </a>
        </div>
        <div className="port1-explan">
          <p>
            서브웨이 홈페이지를 html&css JavaScript를 사용해서 만들어
            보았습니다.
            <br />
            클릭하는 모든 링크는 실제 서브웨이 홈페이지 링크랑 동일하게
            연결시켰습니다.
          </p>
        </div>
        <div className="port1-date">
          <h3>제작시작일</h3>
          <p>2025.11.12</p>
          <h3>종료일</h3>
          <p>2025.11.19</p>
          <h3>기여도</h3>
          <p>100%</p>
        </div>
        <div className="port1-result">
          <h3>성과</h3>
          <p>
            따로 홈페이지의 html이나 css를 보지않고 직접 작성하면서 두 툴에대한
            <br /> 숙련도가 높아져 차후 홈페이지 작업시간을 많이 줄일 수
            있었습니다. <br /> 또한 해당홈페이지에서 사용하는 슬라이드 방식을
            적용하기 위해서 자바스크립트를
            <br />
            다시 복습할수 있어 자바스크립트 숙련도도 많이 높아졌습니다.
          </p>
        </div>
        <div className="port1-tool">
          <h3>Use Skill</h3>
          <div className="port1-skill">
            <img src="images/html.png" alt="" />
            <img src="images/css.png" alt="" />
            <img src="images/js.png" alt="" />
          </div>
        </div>
        <div className="homee-buttons">
          <Link to="/portfolio2">
            <button className="btn-primary">port2</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
