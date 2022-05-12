import { useEffect } from "react";
import "antd/dist/antd.css";
import style from "./Main.module.css";
import { Layout, Menu, BackTop, notification } from "antd";
import {
  TeamOutlined,
  UserOutlined,
  SolutionOutlined,
  HomeOutlined,
  ProfileOutlined,
  FileProtectOutlined,
  ReconciliationOutlined,
  LogoutOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { Redirect, Switch, useHistory, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../../ProtectedRoute/ProtectedRoute";
import { Profile } from "./Profile/Profile";
import { Fullname } from "./Fullname/Fullname";
import { Passport } from "./Passport/Passport";
import { School } from "./School/School";
import { Certificate } from "./Certificate/Certificate";
import { Family } from "./Family/Family";
import { AddSpecialties } from "./AddSpecialties/AddSpecialties";
import { useDispatch, useSelector } from "react-redux";
import { changeIsAuth } from "../../../features/auth-slice";
import { Appointments } from "./Appointments/Appointments";
// import SubMenu from "antd/lib/menu/SubMenu";

const { Content, Sider } = Layout;

export const Main = () => {
  // const [isPhone, setIsPhone] = useState(window.innerWidth); Do side menu on mobile
  const isAppointment = useSelector((state) => state.student.isAppointment);
  const selectedSpecialties = useSelector(
    (state) => state.student.selectedSpecialties
  );
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    window.sessionStorage.setItem('isVisitedSpec', JSON.stringify(false))
    if (!isAppointment) {
      openNotificationWithIcon(
        "warning",
        "Вы не записались на подтверждение введенных данных."
      );
    }
    if (selectedSpecialties.length === 0) {
      openNotificationWithIcon("warning", "Вы не выбрали специальности!");
    }
  }, []);

  const handleLogout = () => {
    history.push("/login");
    dispatch(changeIsAuth(false));
  };
  const openNotificationWithIcon = (type, text) => {
    notification[type]({
      message: "Внимание",
      description: text,
    });
  };
  return (
    <>
      <Layout>
        <Sider
          className={style.sider}
          style={{
            overflow: "hidden",
            height: "100vh",
            position: "fixed",
            left: 0,
            zIndex: 99,
          }}
        >
          <div className={style.logo}>
            {/* <img
              className={style.logo}
              src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkAIpXMwE19U7JAAoMIGLkqKaKTM5SRkZCeTgDn6uOyic"
              alt="akvt logo"
            /> */}
            АКВТ
          </div>
          <Menu
            theme="dark"
            selectedKeys={[location.pathname]}
            // defaultSelectedKeys={[location.pathname]}
            mode="vertical"
          >
            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="Профиль"> */}
            <Menu.Item
              onClick={() => history.push("/profile")}
              key="/profile"
              icon={<UserOutlined />}
            >
              Профиль
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/fullname")}
              key="/fullname"
              icon={<SolutionOutlined />}
            >
              ФИО
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/passport")}
              key="/passport"
              icon={<ProfileOutlined />}
            >
              Паспорт
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/school")}
              key="/school"
              icon={<HomeOutlined />}
            >
              Школа
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/certificate")}
              key="/certificate"
              icon={<FileProtectOutlined />}
            >
              Аттестат
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/family")}
              key="/family"
              icon={<TeamOutlined />}
            >
              Семья
            </Menu.Item>
            {/* </SubMenu> */}
            <Menu.Item
              onClick={() => history.push("/appointments")}
              key="/appointments"
              icon={<FieldTimeOutlined />}
            >
              Запись
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/academics")}
              key="/academics"
              icon={<ReconciliationOutlined />}
            >
              Выбор специальности
            </Menu.Item>
            <Menu.Item
              style={{
                position: "absolute",
                bottom: 0,
                zIndex: 1,
                width: "100%",
              }}
              danger
              onClick={handleLogout}
              key="8"
              icon={<LogoutOutlined />}
            >
              Выход
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          className={style.siteLayout}
          style={{
            minHeight: "100vh",
          }}
        >
          <Content
            style={{
              margin: "12px 16px",
              overflow: "inherit",
            }}
          >
            <div
              className={style.siteLayoutBackground}
              style={{
                padding: 24,
                backgroundColor: "#fff",
                overflow: "hidden",
                minHeight: "100%",
              }}
            >
              <Switch>
                <ProtectedRoute path="/profile" render={<Profile />} />
                <ProtectedRoute path="/fullname" render={<Fullname />} />
                <ProtectedRoute path="/passport" render={<Passport />} />
                <ProtectedRoute path="/school" render={<School />} />
                <ProtectedRoute path="/certificate" render={<Certificate />} />
                <ProtectedRoute path="/family" render={<Family />} />
                <ProtectedRoute
                  path="/appointments"
                  render={<Appointments />}
                />
                <ProtectedRoute path="/academics" render={<AddSpecialties />} />
                {/* <Redirect from="*" to="/profile" /> */}
              </Switch>
              <BackTop />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
