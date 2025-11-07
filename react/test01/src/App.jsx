import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const incco = () => {
    setCount(count + 1);
  };
  const decco = () => {
    setCount(count - 1);
  };

  const resetco = () => {
    setCount(0);
  };
  const getCount = () => {
    if (count > 0) return "blue-col";
    if (count < 0) return "red-col";
    return "black-col";
  };

  return (
    <div className="container">
      <h2 className="title">카운트 앱</h2>
      <div className={`count ${getCount()}`}>{count}</div>
      <div className="btngroup">
        <button onClick={incco}>증가</button>
        <button onClick={decco}>감소</button>
        <button onClick={resetco}>초기화</button>
      </div>
    </div>
  );
}
