import React from "react";

function Task({ text,category, onDelete }) {
  function handleClick() {
    onDelete(text);
  }
  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={handleClick}>
        X
      </button>
    </div>
  );
}

export default Task;
