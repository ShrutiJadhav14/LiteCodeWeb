import { Navigate, useNavigationType } from "react-router-dom";
import { isAdminLoggedIn } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const navigationType = useNavigationType();

  // Block direct URL access & refresh
  if (navigationType === "POP") {
    return <Navigate to="/" replace />;
  }
  if (!isAdminLoggedIn()) {
      return <Navigate to="/admin-login" replace />;
    }
    return children;

};

export default ProtectedRoute;
