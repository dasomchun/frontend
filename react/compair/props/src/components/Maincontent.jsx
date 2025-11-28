import React from "react";
import CounterSection from "./CounterSection";
import Usersection from "./Usersection";

export default function Maincontent({
  count,
  decrementCount,
  resetCount,
  incrementCount,
  user,
  updateUserAge,
  updateUserName,
}) {
  return (
    <main className="main-content">
      <CounterSection
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        resetCount={resetCount}
      />
      <Usersection
        user={user}
        updateUserName={updateUserName}
        updateUserAge={updateUserAge}
      />
    </main>
  );
}
