import { Button, Form, Modal } from "antd"
import { useState } from "react";
import { QuotaForm } from "./QuotaForm";

export const AddQuotas = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleOk = () => {
    setLoading(true);
    form.validateFields().then(
      () => {
        setTimeout(() => {
          form.resetFields();
          setLoading(false);
          setVisible(false)
        }, 1000)
      },
      () => {
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      }
    )
  };


  return <>
    <Button type="primary" onClick={showModal}>
      Добавить специальность
    </Button>
    <Modal
      visible={visible}
      title="Добавление специальности"
      centered
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Отмена
        </Button>,
        <Button
          form="createQuotaForm"
          key="submit"
          htmlType="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Добавить
        </Button>,
      ]}
    >
      <QuotaForm form={form} onOk={handleOk} />
    </Modal>
  </>
}