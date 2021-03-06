import style from "./SpecialtyCard.module.css";
import { Card, Modal, Button, notification } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSpecialty } from "../../../features/student-slice";
const { Meta } = Card;

export const SpecialtyCard = ({ code, speciality, qualification }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const selectedSpecialties = useSelector(
    (state) => state.student.selectedSpecialties
  );

  const handleClick = () => {
    setModalVisible(true);
  };
  const specialties = () => {
    openNotificationWithIcon(
      "info",
      `Вы можете выбрать еще ${
        1 - selectedSpecialties.length
      } специальность(-и,-ей)`
    );
  };
  const handleClickYesModal = () => {
    if (selectedSpecialties.length === 2)
      return openNotificationWithIcon(
        "error",
        <>Вы не можете выбрать более 2-ух специальностей.</>
      );

    setIsLoading(true);
    dispatch(addSpecialty(qualification));
    specialties();
    setTimeout(() => {
      setIsLoading(false);
      setModalVisible(false);
    }, 1000);
  };

  const openNotificationWithIcon = (type, text) => {
    notification[type]({
      message: "Внимание",
      description: text,
    });
  };

  return (
    <>
      <Card
        onClick={handleClick}
        className={style.flexItem}
        hoverable
        cover={
          <img
            style={{ miNheight: "10vh" }}
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
          <Button key="back" onClick={() => setModalVisible(false)}>
            Отмена
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isloading}
            onClick={handleClickYesModal}
          >
            Выбрать
          </Button>,
        ]}
      >
        <p>Это топовая професия атвечаю</p>
      </Modal>
    </>
  );
};
