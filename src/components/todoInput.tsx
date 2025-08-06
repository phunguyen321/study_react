// src/TodoInput.js
import React, { useState, useContext, useRef, useEffect } from "react";
import { TodoContext } from "./TodoContext";

function TodoInput() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);
  const inputRef = useRef();

  const handleAdd = () => {
    if (text.trim() === "") {
      return;
    }
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  // Focus vào input sau khi render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAdd}>Thêm</button>
    </div>
  );
}

export default TodoInput;
