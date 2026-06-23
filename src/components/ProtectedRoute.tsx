import { Navigate } from "react-router";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
}

export default ProtectedRoute;
