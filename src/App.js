import "./index.css";
import "antd/dist/antd.css";
import { Route, Switch, useHistory } from "react-router";
import { Specialties } from "./components/Specialties/Specialties";
import { LogIn } from "./components/Auth/LogIn/LogIn";
import { Main } from "./components/Main/User/Main";
import { DataFillForms } from "./components/PersonalData/DataFillForms";
import { Worker } from "./components/Main/Worker/Worker";
import { Admin } from "./components/Main/Admin/Admin";
import { WorkerAssistant } from "./components/Main/Worker-Assistant/WorkerAssistant";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";
import { Button, Result } from "antd";

/* ----------------------------------------------------------------
  Notes:
  Add dev flag - '// DEV' For all dev console logs 
  Добавить гражданство другой страны && <Tag/>
  maybe sessionStorage for admins 
---------------------------------------------------------------- */
const routeRoles = {
  student: <Main />,
  admin: <Admin />,
  "admission-secretaty": <Worker />,
  "admissions-officer": <WorkerAssistant />,
};

export default function App() {
  /* -----------------------------------------------------   */
  /* Delete RegExp from Personal Data                        */
  /* ADD Lazy-load                                           */
  /* -----------------------------------------------------   */
  const role = useSelector((state) => state.auth.role);
  let history = useHistory();

  return (
    <>
      <Switch>
        <Route exact path="/login" render={() => <LogIn />} />
        <ProtectedRoute path="/personal-data" render={<DataFillForms />} />
        <ProtectedRoute path="/" render={routeRoles[role]} />
        <ProtectedRoute path="*">
          <Result
            style={{ height: "100%" }}
            status="404"
            title="404"
            subTitle="К сожалению, посещенная вами страница не существует."
            extra={
              <Button type="primary" onClick={() => history.push("/workers")}>
                Вернуться на главную
              </Button>
            }
          />
          ,
        </ProtectedRoute>
        <Route path="/academics" render={() => <Specialties />} />

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
            See Specialties

        ----------------------------------------------*/}
      </Switch>
    </>
  );
}
