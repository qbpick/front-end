import { Form, Input, Button } from "antd";
import { useState } from "react";
import style from "../Main.module.css";
import { CheckOutlined } from "@ant-design/icons";
const mi = {
  minLength: 11,
  maxLength: 12,
};

export const Family = (props) => {
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
      <Form className={style.forms} size="large" onFinish={onFinish}>
        <Form.Item
          name={[0, "name"]}
          rules={[
            {
              required: true,
              pattern: new RegExp(
                /^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/
              ),
              message:
                "Пожалуйста введите ФИО родителя. Например: Иванов Иван Иванович",
            },
          ]}
        >
          <Input placeholder="ФИО родителя" />
        </Form.Item>
        <Form.Item
          name={[1, "phone"]}
          rules={[
            {
              required: true,
              pattern: new RegExp(
                /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
              ),
              message:
                "Пожалуйста введите номер телефона родителя. В формате +7 000 000 0000",
            },
          ]}
        >
          <Input {...mi} placeholder="Номер телефона родителя" />
        </Form.Item>
        <Form.Item
          name={[2, "name"]}
          rules={[
            {
              required: false,
              pattern: new RegExp(
                /^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/
              ),
              message:
                "Пожалуйста введите ФИО родителя. Например: Иванов Иван Иванович",
            },
          ]}
        >
          <Input placeholder="ФИО родителя" />
        </Form.Item>
        <Form.Item
          name={[3, "phone"]}
          rules={[
            {
              required: false,
              pattern: new RegExp(
                /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
              ),
              message:
                "Пожалуйста введите номер телефона родителя. В формате +7 000 000 0000",
            },
          ]}
        >
          <Input {...mi} placeholder="Номер телефона родителя" />
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
