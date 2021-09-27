import { useState } from "react";
import "antd/dist/antd.css";
import style from "./Worker.module.css";
import { Layout, Menu } from "antd";
import {
  ReconciliationOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  ScheduleOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import { Redirect, Switch, useHistory } from "react-router-dom";
import { ProtectedRoute } from "../../ProtectedRoute/ProtectedRoute";

import { Cards } from "./Cards/Cards";
import { Statement } from "./Reports/Statement/Statement";
import { Requests } from "./Reports/Requests/Requests";
import { EnrollList } from "./Enrollment/EnrollList/EnrollList";
import { Order } from "./Enrollment/Order/Order";
import { Quotas } from "./Quotas/Quotas";
import { Appointments } from "./Appointments/Appointments";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export const Worker = (props) => {
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
          <div className={style.logo}>Р{!collapsed && "аботник"}</div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="vertical">
            <Menu.Item
              onClick={() => history.push("/worker/cards")}
              key="1"
              icon={<TeamOutlined />}
            >
              Картотека
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<ReconciliationOutlined />}
              title="Отчёты"
            >
              <Menu.Item
                onClick={() => history.push("/worker/reports/statement")}
                key="2"
              >
                Конкурсная ведомость
              </Menu.Item>
              <Menu.Item
                onClick={() => history.push("/worker/reports/requests")}
                key="3"
              >
                Кол-во заявок
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<UsergroupAddOutlined />}
              title="Зачисление"
            >
              <Menu.Item
                onClick={() =>
                  history.push("/worker/enrollment/enrollees-list")
                }
                key="4"
              >
                Список абитуриентов
              </Menu.Item>
              <Menu.Item
                onClick={() => history.push("/worker/enrollment/order")}
                key="5"
              >
                Приказ
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              onClick={() => history.push("/worker/quotas")}
              key="6"
              icon={<FolderAddOutlined />}
            >
              Квоты приема
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/worker/appointments")}
              key="7"
              icon={<ScheduleOutlined />}
            >
              Прием по записи
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
                <Redirect from="/worker" to="/worker/cards" />
                <ProtectedRoute
                  path="/worker/cards"
                  render={<Cards />}
                  
                />
                <ProtectedRoute
                  path="/worker/reports/statement"
                  render={<Statement />}
                  
                />
                <ProtectedRoute
                  path="/worker/reports/requests"
                  render={<Requests />}
                  
                />
                <ProtectedRoute
                  path="/worker/enrollment/enrollees-list"
                  render={<EnrollList />}
                  
                />
                <ProtectedRoute
                  path="/worker/enrollment/order"
                  render={<Order />}
                  
                />
                <ProtectedRoute
                  path="/worker/quotas"
                  render={<Quotas />}
                  
                />
                <ProtectedRoute
                  path="/worker/appointments"
                  render={<Appointments />}
                  
                />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
