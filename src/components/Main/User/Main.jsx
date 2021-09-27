import { useState } from "react";
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

const { Content, Sider } = Layout;

export const Main = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  let history = useHistory();

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            // position: "fixed",
            left: 0,
            zIndex: 99,
          }}
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <div className={style.logo}>
            <img
              className={style.logo}
              src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkAIpXMwE19U7JAAoMIGLkqKaKTM5SRkZCeTgDn6uOyic"
              alt="akvt logo"
            />
            {!collapsed && "АКВТ"}
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="vertical">
            <Menu.Item
              onClick={() => history.push("/im/profile")}
              key="1"
              icon={<UserOutlined />}
            >
              Профиль
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/im/fullname")}
              key="2"
              icon={<SolutionOutlined />}
            >
              ФИО
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/im/passport")}
              key="3"
              icon={<ProfileOutlined />}
            >
              Паспорт
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/im/school")}
              key="4"
              icon={<HomeOutlined />}
            >
              Школа
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/im/certificate")}
              key="5"
              icon={<FileProtectOutlined />}
            >
              Аттестат
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/im/family")}
              key="6"
              icon={<TeamOutlined />}
            >
              Семья
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/im/academics")}
              key="7"
              icon={<ReconciliationOutlined />}
            >
              Выбор специальности
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={style.siteLayout}>
          <Content
            style={{
              margin: "12px 16px",
              position: "relative",
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
                <Redirect exact from="/im" to="/im/profile" />
                <ProtectedRoute path="/im/profile" render={<Profile />} />
                <ProtectedRoute path="/im/fullname" render={<Fullname />} />
                <ProtectedRoute path="/im/passport" render={<Passport />} />
                <ProtectedRoute path="/im/school" render={<School />} />
                <ProtectedRoute
                  path="/im/certificate"
                  render={<Certificate />}
                />
                <ProtectedRoute path="/im/family" render={<Family />} />
                <ProtectedRoute
                  path="/im/academics"
                  render={<AddAcademics />}
                />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
