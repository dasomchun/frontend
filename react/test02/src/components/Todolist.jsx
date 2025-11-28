import React from "react";
import "./Todolist.css";
import { useState } from "react";
import Todoitem from "./Todoitem";

export default function Todolist({ todo, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="Todolist">
      <h4>Todo list 🌱</h4>
      <input
        className="search"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="list">
        {getSearchResult().map((it) => (
          <Todoitem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
