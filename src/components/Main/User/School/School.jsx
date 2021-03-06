import style from "../Main.module.css";
import { useState } from "react";
import { Form, Input, Select, DatePicker, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
const { Option } = Select;

const mi = {
  minLength: 14,
  maxLength: 14,
};

export const School = (props) => {
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
          name="school_name"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите название вашей школы.",
            },
            { min: 5, message: "Минимум 5 символов." },
          ]}
        >
          <Input placeholder="Школа" />
        </Form.Item>
        <Form.Item
          name="classes"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите кол-во законченных классов.",
            },
          ]}
        >
          <Select
            showSearch
            // style={{ width: 200 }}
            placeholder="Кол-во классов"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="9">9</Option>
            <Option value="11">11</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="expiration_date"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите год окончания.",
            },
          ]}
        >
          <DatePicker
            style={{
              width: "100%",
            }}
            placeholder="Год окончания"
            picker="year"
          />
        </Form.Item>
        <Form.Item
          name="certificate_number"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите номер аттестата. (14 цифр)",
            },
          ]}
        >
          <Input {...mi} placeholder="Номер аттестата" />
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
