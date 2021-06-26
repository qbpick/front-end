import React, { useState } from "react";
import "antd/dist/antd.css";
import ".././Auth.css";
import styles from "./LogIn.module.css";
import { Form, Input, Button, Checkbox, Tabs } from "antd";
import { PhoneOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const { TabPane } = Tabs;

const mi = {
  minLength: 11,
  maxLength: 12,
};

export const LogIn = () => {
  const [status, setStatus] = useState("Вход");
  const [load, setLoad] = useState(false);
  const history = useHistory();

  const [isFirstLogin, setIsFirstLogin] = useState(true);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setLoad(true);
    if (isFirstLogin) {
      setTimeout(() => {
        history.push("/im/data");
      }, 500);
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        flex: 1,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className={styles.header}>
        <img
          className={styles.logo}
          src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkAIpXMwE19U7JAAoMIGLkqKaKTM5SRkZCeTgDn6uOyic"
          alt="akvt logo"
        />
        <span className={styles.title}>АКВТ</span>
      </div>
      <Tabs activeKey={status} onChange={setStatus}>
        <TabPane tab="Вход" key="Вход" />
        <TabPane tab="Регистрация" key="Регистрация" />
      </Tabs>
      <Form
        size="large"
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="phone_number"
          rules={[
            {
              required: true,
              pattern: new RegExp(
                /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
              ),
              message: [
                `Пожалуйста введите номер телефона`,
                `в формате +7 000 000 0000`,
              ],
            },
          ]}
        >
          <Input {...mi} prefix={<PhoneOutlined />} placeholder=" Телефон" />
        </Form.Item>
        {status === "Регистрация" && (
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: " Пожалуйста введите e-mail",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder=" E-mail" />
          </Form.Item>
        )}
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите пароль",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder=" Пароль"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>

          <a className="login-form-forgot">Забыли пароль?</a>
        </Form.Item>
        {status === "Вход" && (
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={load}
            >
              Вход
            </Button>
            Или{" "}
            <a onClick={() => setStatus("Регистрация")}>Зарегестрируйтесь!</a>
          </Form.Item>
        )}
        {status === "Регистрация" && (
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={load}
            >
              Регистрация
            </Button>
            Есть аккаунт? <a onClick={() => setStatus("Вход")}>Вход!</a>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};
