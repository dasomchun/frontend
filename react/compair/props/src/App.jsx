import React, { useState } from "react";
import Header from "./components/Header";
import Maincontent from "./components/Maincontent";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "홍길동",
    age: 25,
  });

  const updateUserName = (name) => setUser({ ...user, name });
  // 기존의 user를 펼처 놓고 name 변경
  const updateUserAge = (age) => setUser({ ...user, age });

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <Header user={user} />
      <Maincontent
        count={count}
        user={user}
        updateUserName={updateUserName}
        updateUserAge={updateUserAge}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        resetCount={resetCount}
      />
    </div>
  );
}
