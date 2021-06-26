import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = ({ path, render: Render, isAuth, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        to={path}
        render={() => (isAuth ? Render : <Redirect to="/login" />)}
      />
    </>
  );
};
