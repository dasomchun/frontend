import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./conponents/Home";
import About from "./conponents/About";
import Portfolio1 from "./conponents/Portfolio1";
import Portfolio2 from "./conponents/Portfolio2";
import Portfolio3 from "./conponents/Portfolio3";

export default function App() {
  return (
    <div className="app">
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio1 />}></Route>
          <Route path="/portfolio2" element={<Portfolio2 />}></Route>
          <Route path="/portfolio3" element={<Portfolio3 />}></Route>
        </Routes>
      </main>
    </div>
  );
}
