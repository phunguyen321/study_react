import { Routes, Route, Outlet, Link } from "react-router-dom";
import TodoInput from "../components/todoInput";
import TodoList from "../components/todoList";
import RequireAuth from "../auth/auth";

const TodoLayout = () => (
  <div>
    <h2>Todo</h2>
    <Link to="list">sang list todo</Link>
    <Outlet />
  </div>
);

const TodoListPage = () => <TodoList />;

const TodoDetailPage = () => <div>Todo Detail Page</div>;

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <TodoInput />
          <TodoList />
        </>
      }
    />
    <Route
      path="/about"
      element={
        <>
          <h2>About</h2>
          <p>This is a simple Todo application built with React Hooks.</p>
        </>
      }
    />
    <Route
      path="todo"
      element={
        <RequireAuth>
          <TodoLayout />
        </RequireAuth>
      }
    >
      <Route path="list" element={<TodoListPage />} />
      <Route path="detail" element={<TodoDetailPage />} />
    </Route>
    <Route path="/login" element={<div>Login page</div>}></Route>
  </Routes>
);

export default AppRoutes;
