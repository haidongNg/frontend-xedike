import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          (component, props)
        ) : (
          <Redirect
            to={{ pathname: "/siginup", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
