import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthenticationContext";
import { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  if (isAuthenticated) return children;
}

export default ProtectedRoutes;
