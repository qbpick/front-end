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

const { Content, Sider } = Layout;

export const Main = (props) => {
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
          <div className={style.logo}>А{!collapsed && "КВТ"}</div>
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
          <Content style={{ margin: "12px 16px" }}>
            <div
              className={style.siteLayoutBackground}
              style={{ padding: 24, minHeight: "100%" }}
            >
              <Switch>
                <Redirect from="/im" to="/im/profile" />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
