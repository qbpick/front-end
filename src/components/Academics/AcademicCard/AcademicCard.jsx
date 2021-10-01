import style from "./AcademicCard.module.css";
import { Card, Modal, Button } from "antd";
import { useState } from "react";
const { Meta } = Card;

export const AcademicCard = ({ code, speciality, qualification }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const handleClick = () => {
    console.log(
      "================================================================"
    );
    setModalVisible(true);
  };

  return (
    <>
      <Card
        onClick={handleClick}
        className={style.flexItem}
        hoverable
        cover={
          <img
            alt=""
            src="https://www.seekpng.com/png/full/27-276623_welcome-to-softglobe-php-web-development-services.png"
          />
        }
      >
        <Meta title={qualification} description={`${code} | ${speciality}`} />
      </Card>
      <Modal
        title={qualification}
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={isloading}
            onClick={() => setModalVisible(false)}
          >
            Выбрать
          </Button>,
          <Button key="back" onClick={() => setModalVisible(false)}>
            Отмена
          </Button>,
        ]}
      >
        <p>Это топовая професия атвечаю</p>
      </Modal>
    </>
  );
};
