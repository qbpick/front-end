import { Modal, Button, Form } from "antd";
import { useState } from "react";
import { WorkerForm } from "./WorkerForm";

export const AddWorker = () => {
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



  return (
    <>
      <Button type="primary" onClick={showModal}>
        Добавить работника
      </Button>
      <Modal
        visible={visible}
        title="Добавление работника"
        centered
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Отмена
          </Button>,
          <Button
            form="createWorkerForm"
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
        <WorkerForm form={form} onOk={handleOk} />
      </Modal>
    </>
  );
};
