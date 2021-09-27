import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ path, render: Render, ...rest }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
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
