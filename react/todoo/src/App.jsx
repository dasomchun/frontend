import React, { useState, useRef } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import Todolist from "./component/Todolist";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "react 공부하기",
    createdDate: new Date().getTime(),
  },

  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "게임 하기",
    createdDate: new Date().getTime(),
  },

  {
    id: 4,
    isDone: false,
    content: "운동하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 5,
    isDone: false,
    content: "낮잠 자기",
    createdDate: new Date().getTime(),
  },
];

export default function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(6);
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => {
        return it.id === targetId ? { ...it, isDone: !it.isDone } : it;
      })
    );
  };
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <Todolist todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}
