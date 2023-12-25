import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

const ProtectedRouter = ({ component, isAuthenticated, ...rest }) => {
  const RenderComponents = component;

  return (
    <Routes>
      <Route
        {...rest}
        render={(props) => {
          return isAuthenticated !== null && isAuthenticated !== "" ? (
            <RenderComponents {...props} />
          ) : (
            <Navigate to={{ pathname: "/login" }} />
          );
        }}
      />
    </Routes>
  );
};

export default ProtectedRouter;