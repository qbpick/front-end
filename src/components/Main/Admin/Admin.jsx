import { useState } from "react";
import "antd/dist/antd.css";
import style from "./Admin.module.css";
import { Layout, Menu } from "antd";
import {
  TeamOutlined,
  FileSearchOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { Redirect, useHistory, Switch } from "react-router-dom";
import { ProtectedRoute } from "../../ProtectedRoute/ProtectedRoute";
import { Logs } from "./Logs/Logs";
import { Workers } from "./Workers/Workers";

const { Content, Sider } = Layout;

export const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  let history = useHistory();

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <div className={style.logo}>А{!collapsed && "дминистратор"}</div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="vertical">
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
                <ProtectedRoute path="/organization" render={<Logs />} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
