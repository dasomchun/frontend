import React from "react";
import "./Todoitem.css";

export default function Todoitem({
  id,
  content,
  isDone,
  createdDate,
  onUpdate,
  onDelete,
}) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="Todoitem">
      <div className="checkbox1">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      </div>
      <div className="titlechk">{content}</div>
      <div className="datechk">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btnchk">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
}
