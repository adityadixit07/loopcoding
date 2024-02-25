import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isLoggedIn, Children }) {
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return Children ? Children : <Outlet />;
}

export default PrivateRoute;
