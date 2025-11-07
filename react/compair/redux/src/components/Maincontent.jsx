import React from "react";
import CounterSection from "./CounterSection";
import Usersection from "./Usersection";

export default function Maincontent() {
  return (
    <main className="main-content">
      <CounterSection />
      <Usersection />
    </main>
  );
}
