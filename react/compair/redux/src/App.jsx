import React from "react";
import Header from "./components/Header";
import Maincontent from "./components/Maincontent";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Maincontent />
    </div>
  );
}
// redux란 app전체가 공유하는 데이터 창고
// 어디서든 데이터를 읽고 (useselector) 변경 (dispatch) 할 수 있따.

//언제사용
// Props를 3단계이상 전달,컴포넌트 60개 이상
// 핵심개념
// Store(창고) = useSelector(열기) = dispatch(쓰기)
