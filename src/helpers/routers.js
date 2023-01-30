import React from "react";
import { Navigate } from "react-router-dom";

export function IsUserRedirect({ user, children, loggedInPath, ...restProps }) {
  //If there is no user return the children element
  //if there is user return to loggeInPath
  return user ? <Navigate to={loggedInPath} /> : children;
}

export function ProtectedRoute({ user, children, signedInPath, ...restProps }) {
  return user ? children : <Navigate to={signedInPath} />;
}
