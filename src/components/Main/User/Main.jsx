import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import style from "./Main.module.css";
import { Layout, Menu } from "antd";
import {
  TeamOutlined,
  UserOutlined,
  SolutionOutlined,
  HomeOutlined,
  ProfileOutlined,
  FileProtectOutlined,
  ReconciliationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Redirect, Switch, useHistory } from "react-router-dom";
import { ProtectedRoute } from "../../ProtectedRoute/ProtectedRoute";
import { Profile } from "./Profile/Profile";
import { Fullname } from "./Fullname/Fullname";
import { Passport } from "./Passport/Passport";
import { School } from "./School/School";
import { Certificate } from "./Certificate/Certificate";
import { Family } from "./Family/Family";
import { AddAcademics } from "./AddAcademics/AddAcademics";
import { useDispatch } from "react-redux";
import { changeIsAuth } from "../../../features/auth-slice";

const { Content, Sider } = Layout;

export const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  let history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    // change: push on active
    // history.push("/profile");
  }, []);

  const handleLogout = () => {
    history.push("/login");
    dispatch(changeIsAuth(false));
  };
  return (
    <>
      <Layout>
        <Sider
          style={{
            overflow: "hidden",
            height: "100vh",
            // position: "fixed",
            left: 0,
            zIndex: 99,
          }}
          // collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <div className={style.logo}>
            {/* <img
              className={style.logo}
              src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkAIpXMwE19U7JAAoMIGLkqKaKTM5SRkZCeTgDn6uOyic"
              alt="akvt logo"
            /> */}
            {!collapsed && "АКВТ"}
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="vertical">
            <Menu.Item
              onClick={() => history.push("/profile")}
              key="1"
              icon={<UserOutlined />}
            >
              Профиль
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/fullname")}
              key="2"
              icon={<SolutionOutlined />}
            >
              ФИО
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/passport")}
              key="3"
              icon={<ProfileOutlined />}
            >
              Паспорт
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/school")}
              key="4"
              icon={<HomeOutlined />}
            >
              Школа
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/certificate")}
              key="5"
              icon={<FileProtectOutlined />}
            >
              Аттестат
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/family")}
              key="6"
              icon={<TeamOutlined />}
            >
              Семья
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/academics")}
              key="7"
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
          style={{ position: "relative", minHeight: "100vh" }}
        >
          <Content
            style={{
              margin: "12px 16px",
              color: "white",
              overflow: "inherit",
            }}
          >
            <div
              className={style.siteLayoutBackground}
              style={{
                padding: 24,
                minHeight: "fit-content",
                width: "60%",
              }}
            >
              <Switch>
                <Redirect from="/" to="/profile" />
                <ProtectedRoute path="/profile" render={<Profile />} />
                <ProtectedRoute path="/fullname" render={<Fullname />} />
                <ProtectedRoute path="/passport" render={<Passport />} />
                <ProtectedRoute path="/school" render={<School />} />
                <ProtectedRoute path="/certificate" render={<Certificate />} />
                <ProtectedRoute path="/family" render={<Family />} />
                <ProtectedRoute path="/academics" render={<AddAcademics />} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
