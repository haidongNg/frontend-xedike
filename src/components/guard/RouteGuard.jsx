import React from "react";
import { Route, Redirect } from "react-router-dom";
const RouteGuard = ({ component: Component, path }) => {
  return (
    <Route
      to={path}
      render={props => {
        const token = localStorage.getItem("token");
        const fingerprint = localStorage.getItem("fingerprint");
        if (token && fingerprint) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: "/signin" }} />;
      }}
    />
  );
};

export default RouteGuard;
