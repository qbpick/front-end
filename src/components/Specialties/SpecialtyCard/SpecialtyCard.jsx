import style from "./SpecialtyCard.module.css";
import { Card, Modal, Button, notification } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSpecialty } from "../../../features/student-slice";
import { Link } from "react-router-dom";
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
        <>Вы больше не можете выбирать специальности.</>
      );
    // `Вы больше не можете выбирать специальности. ${(
    //   <NavLink>Перейти к выбранным</NavLink>
    // )}`

    setIsLoading(true);
    dispatch(addSpecialty(qualification));
    specialties();
    setTimeout(() => {
      setModalVisible(false);
      setIsLoading((prev) => false);
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
            onClick={handleClickYesModal}
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
