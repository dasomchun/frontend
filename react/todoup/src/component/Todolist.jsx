import React, { useState } from "react";
import "./Todolist.css";
import Todoitem from "./Todoitem.jsx";

export default function Todolist({ todo, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");
  // useState 리액트훅을 만든다. - search 검색 단어를 관리 해주는 리액트 훅을 만든다
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    //검색폼의 value(타이핑치는 글자) State변수 search(검색단어)를 설정
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
    // search === "" > todo 검색단어가 없으면 todo prop 자체를 리턴
    // 검색단어가 있으면 it이라는 항목에 search에 저장돼있는 단어 포장 돼있으면 it(레코드)를 리턴
  };
  return (
    <div className="Todolist">
      <h4>Todo List 🌱</h4>
      <input
        className="searchbar"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch} // 검색 폼의 onChange 이벤트 핸들러 onChangeSearch 만듦
        value={search}
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <Todoitem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
          // ...it  = id={it.id} content={it.content} isDone={it.isDone} createdDate={it.createdDate}
        ))}
      </div>
      {/* ...it는 전개 연산자(Spread Operator) */}
      {/* 객체의 속성을 펼처셔 자식 컴포넌트 (Todoitem)로 전달 */}
    </div>
  );
}
