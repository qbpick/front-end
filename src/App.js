import "./index.css";
import "antd/dist/antd.css";
import { Redirect, Route, Switch } from "react-router";
import { Academics } from "./components/Academics/Academics";
import { LogIn } from "./components/Auth/LogIn/LogIn";
import { Main } from "./components/Main/User/Main";
import { DataFillForms } from "./components/PersonalData/DataFillForms";
import { Worker } from "./components/Main/Worker/Worker";
import { Admin } from "./components/Main/Admin/Admin";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { useState } from "react";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <Switch>
        <ProtectedRoute path="/im/profile" render={<Main />} isAuth={isAuth} />
        <ProtectedRoute path="/im" render={<DataFillForms />} isAuth={isAuth} />
        <ProtectedRoute path="/worker" render={<Worker />} isAuth={isAuth} />
        <ProtectedRoute path="/admin" render={<Admin />} isAuth={isAuth} />
        {/* <Route path="/im/profile" render={() => <Main />} /> */}
        {/* <Route path="/im/data" render={() => <DataFillForms />} /> */}
        {/* <Route path="/worker/cards" render={() => <Worker />} /> */}
        {/* <Route path="/admin/workers" render={() => <Admin />} /> */}
        <Route path="/login" render={() => <LogIn />} />
        <Route path="/academics" render={() => <Academics />} />
        <Redirect from="/" to="/login" />
      </Switch>
    </>
  );
}
