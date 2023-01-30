import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Browse, Home, SignIn, SignUp } from "./pages";
import * as Routers from "./constants/routes";
import { useAuthListener } from "./hooks";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routers";
function App() {
  const { user } = useAuthListener();
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route
          path={Routers.SIGNIN}
          element={
            <IsUserRedirect user={user} loggedInPath={Routers.BROWSE}>
              <SignIn />
            </IsUserRedirect>
          }
        />
        <Route
          path={Routers.SIGNUP}
          element={
            <IsUserRedirect user={user} loggedInPath={Routers.BROWSE}>
              <SignUp />
            </IsUserRedirect>
          }
        />
        <Route
          path={Routers.BROWSE}
          element={
            <ProtectedRoute signedInPath={Routers.SIGNIN} user={user}>
              <Browse />
            </ProtectedRoute>
          }
        />
        <Route
          path={Routers.HOME}
          element={
            <IsUserRedirect user={user} loggedInPath={Routers.BROWSE}>
              <Home />
            </IsUserRedirect>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
