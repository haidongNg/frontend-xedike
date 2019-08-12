import React from "react";
import { Route, Redirect } from "react-router-dom";
const LoginGuard = ({ component: Component, path }) => {
  return (
    <Route
      to={path}
      render={props => {
        const token = localStorage.getItem("token");
        const fingerprint = localStorage.getItem("fingerprint");
        if (token && fingerprint) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: "/signin", state: {from: props.location}}} />;
      }}
    />
  );
};

export default LoginGuard;
