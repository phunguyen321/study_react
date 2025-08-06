import { Navigate, useLocation } from "react-router-dom";

const isAuthenticated = () => {
  // Thay bằng logic kiểm tra đăng nhập thực tế (token, context, ...)
  return false;
  return !!localStorage.getItem("token");
};

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  if (!isAuthenticated()) {
    // Chuyển hướng về trang đăng nhập, giữ lại vị trí cũ
    return <Navigate to="/login" state={{ from: location }} replace />; // replace để không lưu lại lịch sử chuyển hướng chặn sử dụng nút back lại của browser
  }
  return <>{children}</>;
};

export default RequireAuth;
