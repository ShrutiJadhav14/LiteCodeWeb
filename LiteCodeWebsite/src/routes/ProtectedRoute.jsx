import { Navigate, useNavigationType } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigationType = useNavigationType();

  // Block direct URL access & refresh
  if (navigationType === "POP") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
