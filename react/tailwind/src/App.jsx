import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Responsivetext from "./components/Responsivetext";
import Darkmodebox from "./components/Darkmodebox";
import ConditionalButton from "./components/ConditionalButton";

export default function App() {
  return (
    <div className="space-y-4 p-6">
      <Button />
      <Card />
      <Responsivetext />
      <Darkmodebox />
      <ConditionalButton />
    </div>
  );
}
// div 안에 작게 자식요소 사이의 수직간격 -4
