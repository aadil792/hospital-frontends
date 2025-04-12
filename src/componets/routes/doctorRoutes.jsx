import { useAuth } from "../auth/customAuth";
import { Navigate } from "react-router-dom";

const DoctorProctetedRoutes = ({ children }) => {
  const isLoggedIn = useAuth();

  if (isLoggedIn === null) {
    return <p>Loading.... </p>; // or a spinner
  }

  return isLoggedIn ? children : <Navigate to="/doctor_login" />;
};

export default DoctorProctetedRoutes;
