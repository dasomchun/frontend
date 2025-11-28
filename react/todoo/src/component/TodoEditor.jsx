import React from "react";
import "./TodoEditor.css";
import { useState, useRef } from "react";

export default function TodoEditor({ onCreate }) {
  const [content, setContent] = useState("");
  const inputRef = useRef();
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
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="TodoEditor">
      <h3>새로운 Todo 작성하기 🖍</h3>
      <div className="form">
        <input
          type="text"
          placeholder="새로운 Todo..."
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}
