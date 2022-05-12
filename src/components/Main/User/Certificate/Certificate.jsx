import { Form, Input, Select, Button } from "antd";
import style from "../Main.module.css";
import { useState } from "react";
import {
  MinusCircleOutlined,
  CheckOutlined,
  PlusOutlined,
} from "@ant-design/icons";
const { Option } = Select;
// TODO: Add AutoComplete on select lesson
export const Certificate = (props) => {
  const [isLoad, setIsLoad] = useState(false);
  const onFinish = (values) => {
    setIsLoad(true);
    setTimeout(() => {
      setIsLoad(false);
    }, 1000);
    console.log("Received values of form: ", values);
  };

  const mockles = [
    { lesson: "Мотеша", mark: 5 },
    { lesson: "Рус", mark: 4 },
    { lesson: "Ин", mark: 3 },
  ];

  return (
    <>
      <div>
        <Form className={style.forms} size="large" onFinish={onFinish}>
          <Form.List
            name="fields"
            rules={[
              {
                validator: async (_, fields) => {
                  if (!fields || fields.length < 10) {
                    return Promise.reject(
                      new Error("Должно быть минимум 10 предметов.")
                    );
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => {
              return (
                <>
                  {fields.map((field, index) => (
                    <div key={field.key}>
                      <Input.Group compact>
                        <Form.Item
                          style={{ width: "80%" }}
                          name={[index, "lesson"]}
                          rules={[
                            { required: true, message: "Введите предмет" },
                            {
                              min: 3,
                              message: "Минимум 3 символа.",
                            },
                          ]}
                        >
                          <Input placeholder="Предмет" />
                        </Form.Item>
                        <Form.Item
                          name={[index, "mark"]}
                          noStyle
                          rules={[
                            { required: true, message: "Введите оценку" },
                          ]}
                        >
                          <Select
                            style={{ width: "20%" }}
                            showSearch
                            placeholder="Оценка"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                          </Select>
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className={style.dynamicDeleteButton}
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Input.Group>
                    </div>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block>
                      <PlusOutlined /> Добавить предмет
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              );
            }}
          </Form.List>
          <Form.Item>
            <Button loading={isLoad} type="primary" htmlType="submit" block>
              Подтвердить {isLoad ? "" : <CheckOutlined />}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
