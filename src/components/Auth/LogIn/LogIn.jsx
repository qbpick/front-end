import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import ".././Auth.css";
import styles from "./LogIn.module.css";
import { Form, Input, Button, Checkbox, Tabs, notification } from "antd";
import { PhoneOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeIsAuth } from "../../../features/auth-slice";
const { TabPane } = Tabs;

const mi = {
  minLength: 11,
  maxLength: 11,
};

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "Ошибка",
    description: "Пользователь с такими данными уже существует.",
  });
};

export const LogIn = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispath = useDispatch();

  const [status, setStatus] = useState("Вход");
  const [load, setLoad] = useState(false);
  const history = useHistory();
  // const [isFirstLogin, setIsFirstLogin] = useState(true);
  const [pnum, setPnum] = useState("21212");
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value[0]);
    if (value[0] === 8 || value[0] === 7) {
      setPnum("+7(");
    }
  };
  useEffect(() => {
    if (isAuth) {
      history.push(`/`);
    }
  }, [isAuth, history]);

  const logIn = async (values) => {
    dispath(changeIsAuth(true));
    history.push(`/`);
    // try {
    //   const res = await axios.post("http://127.0.0.1:8000/api/auth", values);
    //   const { data } = res;
    //   dispath(changeIsAuth(true));
    //   console.log(res); // DEV
    // } catch (error) {
    //   console.log(error.response.data); // DEV
    // }
  };
  const signUp = async (values) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/signup", values);
      const { data } = res;
      console.log(data); // DEV
    } catch (error) {
      console.log(error.response); // DEV
      if (error.response.status === 422) {
        openNotificationWithIcon("error");
        setLoad(false);
      }
    }
  };

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    setLoad(true);
    if (status === "Вход") {
      await logIn(values);
    } else {
      await signUp(values);
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
        <span className={styles.title}>AKVT</span>
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
                `в формате 7 000 000 0000`,
              ],
            },
            {
              min: 11,
              message: "Номер должен быть не менее 11 символов",
            },
            {
              max: 11,
              message: "Номер должен быть не более 11 символов",
            },
          ]}
        >
          <Input
            {...mi}
            value={pnum}
            onChange={handleChange}
            prefix={<PhoneOutlined />}
            placeholder=" Телефон"
          />
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
              {
                min: 3,
                message: "Почта должна быть быть не менее 3 символов",
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
            {
              min: 8,
              message: "Пароль должен быть не менее 8 символов",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder=" Пароль"
          />
        </Form.Item>

        {/* {status === "Вход" && (
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <a className="login-form-forgot">Забыли пароль?</a>
          </Form.Item>
        )} */}
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
