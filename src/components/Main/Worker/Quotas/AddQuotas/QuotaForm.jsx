import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 22,
  },
};

export const QuotaForm = ({ handleOk, form }) => {


  const changeFields = () => {
    form.validateFields();
  };
  const onFinish = (values) => {
    console.log(values);
    handleOk()
  };

  return (
    <Form id="createQuotaForm" {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="code"
        label="Код"
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
        name="speciality"
        label="Специальность"
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
        name="qualification"
        label="Квалификация"
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
        name="places"
        label="Кол-во мест"
        rules={[
          {
            required: true,
            message: "Это поле обязательно",
          },
        ]}
      >
        <Input onChange={changeFields} />
      </Form.Item>

    </Form>
  );
};
