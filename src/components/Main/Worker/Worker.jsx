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
import { Cards } from "./Cards/Cards";
import { Statement } from "./Reports/Statement/Statement";
import { Requests } from "./Reports/Requests/Requests";
import { EnrollList } from "./Enrollment/EnrollList/EnrollList";
import { Order } from "./Enrollment/Order/Order";
import { Quotas } from "./Quotas/Quotas";
import { Appointments } from "./Appointments/Appointments";
import { useDispatch } from "react-redux";
import { changeIsAuth } from "../../../features/auth-slice";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export const Worker = (props) => {

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
              onClick={() => history.push("/cards")}
              key="/cards"
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
                onClick={() => history.push("/reports/statement")}
                key="/reports/statement"
              >
                Конкурсная ведомость
              </Menu.Item>
              <Menu.Item
                onClick={() => history.push("/reports/requests")}
                key="/reports/requests"
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
                onClick={() => history.push("/enrollment/enrollees-list")}
                key="/enrollment/enrollees-list"
              >
                Список абитуриентов
              </Menu.Item>
              <Menu.Item
                onClick={() => history.push("/enrollment/order")}
                key="/enrollment/order"
              >
                Приказ
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              onClick={() => history.push("/quotas")}
              key="/quotas"
              icon={<FolderAddOutlined />}
            >
              Квоты приема
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/appointments")}
              key="/appointments"
              icon={<ScheduleOutlined />}
            >
              Прием по записи
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
                <ProtectedRoute path="/cards" render={<Cards />} />
                <ProtectedRoute
                  path="/reports/statement"
                  render={<Statement />}
                />
                <ProtectedRoute
                  path="/reports/requests"
                  render={<Requests />}
                />
                <ProtectedRoute
                  path="/enrollment/enrollees-list"
                  render={<EnrollList />}
                />
                <ProtectedRoute path="/enrollment/order" render={<Order />} />
                <ProtectedRoute path="/quotas" render={<Quotas />} />
                <ProtectedRoute
                  path="/appointments"
                  render={<Appointments />}
                />
                <Redirect from="*" to="/cards" />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
