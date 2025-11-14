import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./conponents/Home";
import About from "./conponents/About";
import Portfolio1 from "./conponents/Portfolio1";

export default function App() {
  return (
    <div className="app">
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio1 />}></Route>
        </Routes>
      </main>
    </div>
  );
}
