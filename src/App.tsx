import "./App.css";
import { TodoProvider } from "./components/todoContext";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

function App() {
  return (
    <TodoProvider>
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <h1>📝 Todo App with Hooks</h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
