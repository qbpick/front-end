import { useState } from "react";
import "antd/dist/antd.css";
import style from "./Worker.module.css";
import { Layout, Menu } from "antd";
import {
  ReconciliationOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  ScheduleOutlined,
  LogoutOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import { Redirect, Switch, useHistory, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../../ProtectedRoute/ProtectedRoute";
import { useDispatch } from "react-redux";
import { changeIsAuth } from "../../../features/auth-slice";
import { Enroll } from "./Enroll/Enroll";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export const WorkerAssistant = (props) => {

  const dispatch = useDispatch();

  let history = useHistory();
  let location = useLocation();

  console.log(location.pathname);
  const handleLogout = () => {
    history.push("/login");
    dispatch(changeIsAuth(false));
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
        >
          <div className={style.logo}>Р{true && "аботник"}</div>
          <Menu
            theme="dark"
            selectedKeys={[location.pathname]}
            // defaultSelectedKeys={["1"]}
            mode="vertical"
          >
           
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
                <ProtectedRoute path="/" render={<Enroll />} />
                <Redirect from="*" to="/cards" />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
