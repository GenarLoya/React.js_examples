import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protectedroute({ children, isAllowed, redirectRoute = "/" }) {
  if (!isAllowed) {
    return <Navigate to={redirectRoute}></Navigate>;
  }

  return children ? children : <Outlet></Outlet>;
}

export default Protectedroute;
