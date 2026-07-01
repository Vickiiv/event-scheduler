import { Navigate } from "react-router";

// Wraps routes that require authentication.
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
}

export default ProtectedRoute;
