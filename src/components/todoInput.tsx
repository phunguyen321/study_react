import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { TodoContext } from "./todoContext";

const TodoInput: React.FC = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    if (text.trim() === "") {
      return;
    }
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  // Focus vào input sau khi render
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAdd}>Thêm</button>
    </div>
  );
};

export default TodoInput;
