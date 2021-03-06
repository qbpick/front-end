import { useState } from "react";
import "antd/dist/antd.css";
import style from "./Admin.module.css";
import { Layout, Menu } from "antd";
import {
  TeamOutlined,
  FileSearchOutlined,
  BankOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Redirect, useHistory, useLocation, Switch } from "react-router-dom";
import { ProtectedRoute } from "../../ProtectedRoute/ProtectedRoute";
import { Logs } from "./Logs/Logs";
import { Workers } from "./Workers/Workers";
import { Organization } from "./Organization/Organization";
import { useDispatch } from "react-redux";
import { changeIsAuth } from "../../../features/auth-slice";

const { Content, Sider } = Layout;

export const Admin = (props) => {
  let history = useHistory();
  let location = useLocation();
  console.log(history);
  const dispatch = useDispatch();
  const handleLogout = () => {
    history.push("/login");
    dispatch(changeIsAuth(false));
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <div className={style.logo}>Администратор</div>
          <Menu
            theme="dark"
            defaultSelectedKeys={['/']}
            selectedKeys={[location.pathname]}
            mode="vertical"
          >
            <Menu.Item
              onClick={() => history.push("/workers")}
              key="/workers"
              icon={<TeamOutlined />}
            >
              Работники
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/logs")}
              key="/logs"
              icon={<FileSearchOutlined />}
            >
              Логи
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/organization")}
              key="/organization"
              icon={<BankOutlined />}
            >
              Организация
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
        <Layout className={style.siteLayout}>
          <Content style={{ margin: "12px 16px" }}>
            <div
              className={style.siteLayoutBackground}
              style={{ padding: 24, minHeight: "100%" }}
            >
              <Switch>
                <ProtectedRoute path="/workers" render={<Workers />} />
                <ProtectedRoute path="/logs" render={<Logs />} />
                <ProtectedRoute
                  path="/organization"
                  render={<Organization />}
                />
                <ProtectedRoute path="*"  />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
