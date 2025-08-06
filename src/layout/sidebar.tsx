import { Link } from "react-router-dom";

const Sidebar = () => (
  <nav
    style={{
      width: 200,
      background: "#f0f0f0",
      padding: 20,
      boxSizing: "border-box",
    }}
  >
    <ul style={{ listStyle: "none", padding: 0 }}>
      <li>
        <Link to="/">Trang chủ</Link>
      </li>
      <li>
        <Link to="/about">Giới thiệu</Link>
      </li>
      <li>
        <Link to="/todo">Danh sách Todo</Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
