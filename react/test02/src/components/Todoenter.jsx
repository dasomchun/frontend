import React from "react";
import "./Todoenter.css";
import { useState, useRef } from "react";

export default function Todoenter({ onCreate }) {
  const [content, setContent] = useState("");
  const inRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keycode == 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!content) {
      inRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="todoenter">
      <h3>새로운 Todo 작성하기 🖋</h3>
      <div className="form">
        <input
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo..."
        />
        <button onSubmit={onSubmit}>추가</button>
      </div>
    </div>
  );
}
