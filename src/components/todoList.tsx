// src/TodoList.js
import React, { useContext, useMemo } from "react";
import { TodoContext } from "./TodoContext";

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.done).length,
    [todos]
  );

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
            style={{
              cursor: "pointer",
              textDecoration: todo.done ? "line-through" : "none",
              color: todo.done ? "gray" : "black",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <p>
        ✅ Đã hoàn thành: {completedCount} / {todos.length}
      </p>
    </div>
  );
}

export default TodoList;
