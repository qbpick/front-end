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

/* ----------------------------------------------------------------
  Notes:
  Add dev flag - '// DEV' For all dev console logs 

---------------------------------------------------------------- */

export default function App() {
  /* -----------------------------------------------------   */
  /* Add localStorage 'auth' and maybe ADD state-manager     */
  /* Delete RegExp from Personal Data                        */
  /* -----------------------------------------------------   */

  return (
    <>
      <Switch>
        <ProtectedRoute path="/im/data" render={<DataFillForms />} />
        <ProtectedRoute path="/im" render={<Main />} />
        <ProtectedRoute path="/worker" render={<Worker />} />
        <ProtectedRoute path="/admin" render={<Admin />} />

        {/* <Route path="/im/profile" render={() => <Main />} /> */}
        {/* <Route path="/im/data" render={() => <DataFillForms />} /> */}
        {/* <Route path="/worker/cards" render={() => <Worker />} /> */}
        {/* <Route path="/admin/workers" render={() => <Admin />} /> */}
        <Route path="/login" render={() => <LogIn />} />
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
