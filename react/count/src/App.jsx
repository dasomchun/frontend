import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increcou = () => {
    setCount(count + 1);
  };

  const decrecou = () => {
    setCount(count - 1);
  };

  const resetcou = () => {
    setCount(0);
  };

  const getCount = () => {
    if (count > 0) return "blue-text";
    if (count < 0) return "red-text";
    return "black-text";
  };

  return (
    <div className="container">
      <h2 className="title">카운트 앱</h2>
      <div className={`count ${getCount()}`}>{count}</div>
      <div className="btngroup">
        <button onClick={increcou}>증가</button>
        <button onClick={decrecou}>감소</button>
        <button onClick={resetcou}>초기화</button>
      </div>
    </div>
  );
}
