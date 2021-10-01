import { Form, Input, Select, Button } from "antd";
import React from "react";
import { useState } from "react";
import {
  MinusCircleOutlined,
  CheckOutlined,
  PlusOutlined,
} from "@ant-design/icons";
const { Option } = Select;

export const Certificate = (props) => {
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
      <div>
        <Form style={{ textAlign: "center" }} size="large" onFinish={onFinish}>
          <Form.List
            name="fields"
            rules={[
              {
                validator: async (_, fields) => {
                  if (!fields || fields.length < 2) {
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
                      <Input.Group compact style={{ width: "100%" }}>
                        <Form.Item
                          style={{ width: "75%" }}
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
                          style={{ width: "20%" }}
                          name={[index, "mark"]}
                          noStyle
                          rules={[
                            { required: true, message: "Введите оценку" },
                          ]}
                        >
                          <Select
                            showSearch
                            style={{ width: 100 }}
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
                          <Button
                            type="danger"
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          >
                            <MinusCircleOutlined />
                          </Button>
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
