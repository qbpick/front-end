import { Avatar, Button, Divider, List } from "antd";
import { UserOutlined, FieldTimeOutlined } from "@ant-design/icons";
import style from "../Main.module.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const mockSelectedSpecialtie = [
  {
    id: 1,
    code: "09.02.07",
    speciality: "Информационные системы и программирование",
    qualification: "Программист",
    image:
      "https://www.seekpng.com/png/full/27-276623_welcome-to-softglobe-php-web-development-services.png",
  },
  {
    id: 2,
    code: "09.02.07",
    speciality: "Информационные системы и программирование",
    qualification: "Разработчик веб и мультимедийных приложений",
    image:
      "https://www.seekpng.com/png/full/27-276623_welcome-to-softglobe-php-web-development-services.png",
  },
];
// const mockSelectedSpecialties = [];
export const Profile = (props) => {
  /* DEV 2 -> */
  const [mockSelectedSpecialties, setMockSelectedSpecialties] = useState(
    mockSelectedSpecialtie
  );
  const [isDataConfirmed, setIsdataConfirmed] = useState(true);
  const [appointmentTime, setAppointmentTime] = useState(null);

  let history = useHistory();
  const handleDelete = (id) => {
    setMockSelectedSpecialties(
      mockSelectedSpecialties.filter((el) => id !== el.id)
    );
  };

  return (
    <>
      <div className={style.profileCard}>
        <div className={style.avatarHolder}>
          <Avatar size={88} icon={<UserOutlined />} />
          <div className={style.profileName}>Цыган Алькапонович</div>
        </div>
        <Divider orientation="left">Данные</Divider>
        <div className={style.profileData}>
          <span
            style={{
              fontWeight: "600",
              color: isDataConfirmed ? "#7cb305" : "#cf1322",
            }}
          >
            Данные {isDataConfirmed ? "подтверждены." : "не подтверждены."}
          </span>
        </div>
        <Divider orientation="left">Запись на подтверждение данных</Divider>
        {/* {!isDataConfirmed && ()} */}
        <div className={style.confirmData}>
          {appointmentTime ? (
            <span>{appointmentTime}</span>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#faad14" }}>Вы не записаны</span>
              <Button
                onClick={() => history.push("/appointments")}
                icon={<FieldTimeOutlined />}
              >
                Записаться
              </Button>
            </div>
          )}
        </div>
        <Divider orientation="left">Ваш средний балл - 4.6</Divider>
        <Divider orientation="left">Выбранные специальности</Divider>
        <div className={style.selectedSpecialties}>
          {mockSelectedSpecialties.length ? (
            <List
              itemLayout="horizontal"
              dataSource={mockSelectedSpecialties}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    /* eslint-disable */
                    <a
                      onClick={() => handleDelete(item.id)}
                      key="list-loadmore-delete"
                    >
                      Удалить
                    </a>,
                  ]}
                >
                  <List.Item.Meta
                    title={
                      <a href="https://ant.design">{item.qualification}</a>
                    }
                    description={`${item.code} | ${item.speciality}`}
                  />
                </List.Item>
              )}
            />
          ) : (
            <Link to="/academics">Выбрать специальности</Link>
          )}
        </div>
      </div>
    </>
  );
};
