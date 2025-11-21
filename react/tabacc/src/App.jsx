import React from "react";
import Tabmenu from "./components/Tabmenu";
import Accordionmenu from "./components/Accordionmenu";
import "./App.css";
import Slide from "./components/Slide";

export default function App() {
  return (
    <div className="app">
      <div className="app-container">
        <h1>React 탭 & 아코디언 메뉴 & 슬라이드</h1>
        <Tabmenu />
        <Accordionmenu />
        <Slide />
      </div>
    </div>
  );
}
