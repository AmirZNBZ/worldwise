import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/FakeAuthContext";
import { useEffect } from "react";
import propTypes from "prop-types";
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [navigate, isAuthenticated]
  );

  return isAuthenticated ? children : null;
}

ProtectedRoute.propTypes = {
  children: propTypes.any,
};

export default ProtectedRoute;
