import { Form, Input, Button } from "antd";
import { useState } from "react";
import style from "../Main.module.css";
import { CheckOutlined } from "@ant-design/icons";
const mi = {
  minLength: 11,
  maxLength: 12,
};

export const Fullname = (props) => {
  const [isLoad, setIsLoad] = useState(false);

  const onFinish = (values) => {
    setIsLoad(true);
    setTimeout(() => {
      setIsLoad(false);
    }, 1000);
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <Form
        className={style.forms}
        size="large"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="last_name"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[А-ЯЁ][а-яё]*$/),
              message: "Пожалуйста введите вашу фамилию",
            },
            {
              min: 3,
              message: "Минимум 3 символов.",
            },
          ]}
        >
          <Input placeholder="Фамилия" />
        </Form.Item>
        <Form.Item
          name="first_name"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[А-ЯЁ][а-яё]*$/),
              message: "Пожалуйста введите ваше имя",
            },
            {
              min: 2,
              message: "Минимум 2 символа.",
            },
          ]}
        >
          <Input placeholder="Имя" />
        </Form.Item>
        <Form.Item
          name="middle_name"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[А-ЯЁ][а-яё]*$/),
              message: "Пожалуйста введите ваше отчество",
            },
            {
              min: 2,
              message: "Минимум 2 символа.",
            },
          ]}
        >
          <Input placeholder="Отчество" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              pattern: new RegExp(
                /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
              ),
              message:
                "Пожалуйста введите корректный телефон в формате +7 000 000 0000",
            },
          ]}
        >
          <Input {...mi} placeholder="Доп. Телефон (необязательно)" />
        </Form.Item>
        <Form.Item>
          <Button loading={isLoad} type="primary" htmlType="submit" block>
            Подтвердить {isLoad ? "" : <CheckOutlined />}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
