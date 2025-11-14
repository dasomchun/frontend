import React from "react";
import "./Portfolio1.css";

export default function Portfolio1() {
  return (
    <div id="portfolio1" className="portfolio1-section">
      <header>
        <h3>PortFolio</h3>
      </header>
      <div className="container">
        <div className="port1-title">
          <h3>Subway</h3>
        </div>
        <div className="port1-images">
          <a href="https://www.subway.co.kr/">
            <img src="../images/b1.jpg" alt="" />
          </a>
        </div>
        <div className="port1-explan">
          <h3>설명 Explanation</h3>
          <p>ㅇㅇㅇㅇ</p>
        </div>
      </div>
    </div>
  );
}
