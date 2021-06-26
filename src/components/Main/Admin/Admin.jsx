import { useState } from "react";
import "antd/dist/antd.css";
import style from "./Admin.module.css";
import { Layout, Menu } from "antd";
import { TeamOutlined, FileSearchOutlined } from "@ant-design/icons";
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
              onClick={() => history.push("/admin/workers")}
              key="1"
              icon={<TeamOutlined />}
            >
              Работники
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/admin/logs")}
              key="2"
              icon={<FileSearchOutlined />}
            >
              Логи
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
                <Redirect from="/admin" to="/admin/workers" />
                <ProtectedRoute
                  path="/admin/workers"
                  render={<Workers />}
                  isAuth={true}
                />
                <ProtectedRoute
                  path="/admin/logs"
                  render={<Logs />}
                  isAuth={true}
                />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};