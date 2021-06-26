import { Form, Input, Checkbox, Select, DatePicker, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Option } = Select;

const series = {
  minLength: 4,
  maxLength: 4,
};
const nums = {
  minLength: 6,
  maxLength: 6,
};
export const PassportForm = ({ step, setStep }) => {
  const [isCitizenship, setIsCitizenship] = useState(true);
  const [isLoad, setIsLoad] = useState(false);
  const onFinish = (values) => {
    setIsLoad(true);
    setTimeout(() => {
      setIsLoad(false);
      setStep(2);
    }, 500);
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Form size="large" onFinish={onFinish}>
        {/* <Form.Item
          name="last_name"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите дату выдачи паспорта",
            },
          ]}
        >
          <DatePicker
            placeholder="Дата выдачи"
            style={{
              width: "100%",
            }}
          />
        </Form.Item> */}
        {isCitizenship && (
          <>
            <Form.Item
              name="issued"
              rules={[
                {
                  required: isCitizenship ? true : false,
                  message: "Пожалуйста введите кем выдан паспорт.",
                },
                {
                  min: 10,
                  message: "Минимум 10 символов.",
                },
              ]}
            >
              <Input placeholder="Кем выдан" />
            </Form.Item>
            <Form.Item
              name="series"
              rules={[
                {
                  required: isCitizenship ? true : false,
                  pattern: new RegExp(/^[0-9]+/gm),
                  message: "Пожалуйста введите серию паспорта. (4 цифры)",
                },
              ]}
            >
              <Input {...series} placeholder="Серия" />
            </Form.Item>
            <Form.Item
              name="number"
              rules={[
                {
                  required: isCitizenship ? true : false,
                  pattern: new RegExp(/^[0-9]+/gm),
                  message: "Пожалуйста введите номер паспорта. (6 цифр)",
                },
              ]}
            >
              <Input {...nums} placeholder="Номер" />
            </Form.Item>
            <Form.Item
              name="birthday"
              rules={[
                {
                  required: isCitizenship ? true : false,
                  message: "Пожалуйста введите вашу дату рождения.",
                },
              ]}
            >
              <DatePicker
                placeholder="Дата рождения"
                style={{
                  width: "100%",
                }}
              />
              {/* TODO:  */}
            </Form.Item>
            <Form.Item
              name="gender"
              rules={[
                {
                  required: isCitizenship ? true : false,
                  message: "Пожалуйста выберите пол.",
                },
              ]}
            >
              <Select
                showSearch
                // style={{ width: 200 }}
                placeholder="Выберите пол"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="male">Мужской</Option>
                <Option value="female">Женский</Option>
              </Select>
              {/* TODO:  */}
            </Form.Item>
            <Form.Item
              name="birthplace"
              rules={[
                {
                  required: isCitizenship ? true : false,
                  message: "Пожалуйста введите место рождения.",
                },
                {
                  min: 5,
                  message: "Минимум 5 символов.",
                },
              ]}
            >
              <Input placeholder="Место рождения." />
            </Form.Item>
            <Form.Item
              name="registration"
              rules={[
                {
                  required: isCitizenship ? true : false,
                  message: "Пожалуйста введите адрес регистрации.",
                },
                {
                  min: 5,
                  message: "Минимум 5 символов.",
                },
              ]}
            >
              <Input placeholder="Адрес регистрации" />
            </Form.Item>
          </>
        )}
        <Form.Item name="citizenship" valuePropName="checked">
          <Checkbox onChange={() => setIsCitizenship(!isCitizenship)}>
            Нет гражданства РФ.
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button loading={isLoad} type="primary" htmlType="submit" block>
            Дальше {isLoad ? "" : <ArrowRightOutlined />}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
