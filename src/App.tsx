import { BrowserRouter, useLocation } from "react-router-dom";
import "./App.css";
import { TodoProvider } from "./components/todoContext";
import Sidebar from "./layout/sidebar";
import AppRoutes from "./route/route";
import Header from "./layout/header";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  if (isLoginPage) {
    return <AppRoutes />;
  }

  return (
    <>
      <Header />
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />
        {/* Content */}
        <main style={{ flex: 1, padding: 24 }}>
          <AppRoutes />
        </main>
      </div>
    </>
  );
};

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
