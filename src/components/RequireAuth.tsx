import { Outlet, Navigate, useLocation } from "react-router-dom";

export const RequireAuth = () => {
  let auth = localStorage.getItem("token") != null;
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};
