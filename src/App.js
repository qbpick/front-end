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
import { useSelector } from "react-redux";

/* ----------------------------------------------------------------
  Notes:
  Add dev flag - '// DEV' For all dev console logs 

---------------------------------------------------------------- */
const routeRoles = {
  student: <Main />,
  admin: <Admin />,
  "admission-secretaty": <Worker />,
  "admissions-officer": <Worker />,
};

export default function App() {
  /* -----------------------------------------------------   */
  /* Add localStorage 'auth'                                 */
  /* Delete RegExp from Personal Data                        */
  /* -----------------------------------------------------   */
  const role = useSelector((state) => state.auth.role);

  return (
    <>
      <Switch>
        <Route exact path="/login" render={() => <LogIn />} />
        <ProtectedRoute path="/" render={routeRoles[role]} />
        <Route path="/academics" render={() => <Academics />} />

        <ProtectedRoute path="/personal-data" render={<DataFillForms />} />

        {/* <ProtectedRoute path="/im/data" render={<DataFillForms />} />
        <ProtectedRoute path="/im" render={<Main />} />
        <ProtectedRoute path="/worker" render={<Worker />} />
        <ProtectedRoute path="/admin" render={<Admin />} /> */}

        {/* <Route path="/im/profile" render={() => <Main />} /> */}
        {/* <Route path="/im/data" render={() => <DataFillForms />} /> */}
        {/* <Route path="/worker/cards" render={() => <Worker />} /> */}
        {/* <Route path="/admin/workers" render={() => <Admin />} /> */}
        {/* ---------------------------------------------- 
          Later Remove Redirect from '/'  
          Make '/' Page - About This Site
            See Academics

        ----------------------------------------------*/}
      </Switch>
    </>
  );
}
