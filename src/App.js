import "./index.css";
import "antd/dist/antd.css";
import { Redirect, Route, Switch, useHistory } from "react-router";
import { Academics } from "./components/Academics/Academics";
import { LogIn } from "./components/Auth/LogIn/LogIn";
import { Main } from "./components/Main/User/Main";
import { DataFillForms } from "./components/PersonalData/DataFillForms";
import { Worker } from "./components/Main/Worker/Worker";
import { Admin } from "./components/Main/Admin/Admin";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { useState } from "react";

/* ----------------------------------------------------------------
  Notes:
  Add dev flag - '// DEV' For all dev console logs 

---------------------------------------------------------------- */

export default function App() {
  const [isAuth, setIsAuth] = useState(true); // dev
  const history = useHistory();
  /* -----------------------------------------------------   */
  /* Add Roles Auth   USER | Admin | WORKER                  */
  /* Add localStorage 'auth' and maybe ADD state-manager     */
  /* Delete RegExp from Personal Data                        */
  /* -----------------------------------------------------   */

  switch (isAuth) {
    case true:
      history.push("/im");
      break;
    default:
      history.push("/");
      break;
  }

  return (
    <>
      <Switch>
        <ProtectedRoute
          path="/im/data"
          render={<DataFillForms />}
          isAuth={isAuth}
        />
        <ProtectedRoute path="/im" render={<Main />} isAuth={isAuth} />
        <ProtectedRoute path="/worker" render={<Worker />} isAuth={isAuth} />
        <ProtectedRoute path="/admin" render={<Admin />} isAuth={isAuth} />
        {/* <Route path="/im/profile" render={() => <Main />} /> */}
        {/* <Route path="/im/data" render={() => <DataFillForms />} /> */}
        {/* <Route path="/worker/cards" render={() => <Worker />} /> */}
        {/* <Route path="/admin/workers" render={() => <Admin />} /> */}
        <Route
          path="/login"
          render={() => <LogIn setIsAuth={setIsAuth} isAuth={isAuth} />}
        />
        <Route path="/academics" render={() => <Academics />} />
        {/* ---------------------------------------------- 
          Later Remove Redirect from '/'  
          Make '/' Page - About This Site
            See Academics

        ----------------------------------------------*/}
        <Redirect from="/" to="/login" />
      </Switch>
    </>
  );
}
