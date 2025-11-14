import React from "react";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="home-content">
        <div className="home-greeting">
          <div className="greeting-text">Chun-Da-Som</div>
        </div>

        <h1 className="home-name">PORTFOLIO</h1>

        <p className="home-description">FRONTEND DEVELOPER</p>

        <div className="home-buttons">
          <Link to="/about">
            <button className="btn-primary">About me</button>
          </Link>
        </div>

        <div className="homee-buttons">
          <Link to="/portfolio">
            <button className="btn-primary">port</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
