import { Form, Input, Select } from "antd";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 22,
  },
};

export const WorkerForm = ({ handleOk }) => {
  const [form] = Form.useForm();

  const changeFields = () => {
    form.validateFields();
  };
  const onFinish = () => {
    handleOk();
    form.submit();
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="first_name"
        label="Имя"
        rules={[
          {
            required: true,
            message: "Это поле обязательно",
          },
        ]}
      >
        <Input onChange={changeFields} />
      </Form.Item>
      <Form.Item
        name="last_name"
        label="Фамилия"
        rules={[
          {
            required: true,
            message: "Это поле обязательно",
          },
        ]}
      >
        <Input onChange={changeFields} />
      </Form.Item>
      <Form.Item
        name="middle_name"
        label="Отчество"
        rules={[
          {
            required: true,
            message: "Это поле обязательно",
          },
        ]}
      >
        <Input onChange={changeFields} />
      </Form.Item>
      <Form.Item
        name="login"
        label="Логин"
        rules={[
          {
            required: true,
            message: "Это поле обязательно",
          },
        ]}
      >
        <Input onChange={changeFields} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Пароль"
        rules={[
          {
            required: true,
            message: "Это поле обязательно",
          },
        ]}
      >
        <Input onChange={changeFields} />
      </Form.Item>
      <Form.Item
        name="role"
        label="Роль"
        rules={[
          {
            required: true,
            message: "Это поле обязательно",
          },
        ]}
      >
        <Select onChange={changeFields} placeholder="Роль работника" allowClear>
          <Option value="admission-secretaty">
            Cекретарь приемной комиссии
          </Option>
          <Option value="admissions-officer">Работник приемной комиссии</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};
