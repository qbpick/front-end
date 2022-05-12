import style from "./Specialties.module.css";
import { Typography, Tooltip, Spin, Progress } from "antd";
import "antd/dist/antd.css";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { SpecialtyCard } from "./SpecialtyCard/SpecialtyCard";
const { Title } = Typography;

const tooltipContent = (
  <div>
    <p>Вы можете подать документы только на 2 (две) специальности.</p>
    Нажав на специальность вы сможете подробнее узнать о ней.
  </div>
);

export function Specialties() {
  /* DEV */
  const [mockMap, setMockMap] = useState([
    {
      code: "09.02.01",
      speciality: "Компьютерные системы и комплексы",
      qualification: "Техник по компьютерным системам",
    },
    {
      code: "09.02.06",
      speciality: "Сетевое и системное администрирование",
      qualification: "Сетевой и системный администратор",
    },
    {
      code: "09.02.07",
      speciality: "Информационные системы и программирование",
      qualification: "Программист",
      image:
        "https://www.seekpng.com/png/full/27-276623_welcome-to-softglobe-php-web-development-services.png",
    },
    {
      code: "09.02.07",
      speciality: "Информационные системы и программирование",
      qualification: "Разработчик веб и мультимедийных приложений",
      image:
        "https://www.seekpng.com/png/full/27-276623_welcome-to-softglobe-php-web-development-services.png",
    },
    {
      code: "09.02.07",
      speciality: "Информационные системы и программирование",
      qualification: "Специалист по информационным системам",
      image:
        "https://www.seekpng.com/png/full/27-276623_welcome-to-softglobe-php-web-development-services.png",
    },
    {
      code: "10.02.05",
      speciality:
        "Обеспечение информационной безопасности автоматизированных систем",
      qualification: "Техник по защите информации",
    },
    {
      code: "13.02.11",
      speciality:
        "Техническая эксплуатация и обслуживание электрического и электромеханического оборудования (по отраслям)",
      qualification: "Техник",
    },
    {
      code: "15.02.14",
      speciality:
        "Оснащение средствами автоматизации технологических процессов и производств (по отраслям)",
      qualification: "Техник",
    },
    {
      code: "15.01.31",
      speciality: "Мастер контрольно-измерительных приборов и автоматики",
      qualification: "Наладчик контрольно-измерительных приборов и автоматики",
    },
    {
      code: "15.01.31",
      speciality: "Мастер контрольно-измерительных приборов и автоматики",
      qualification: "Слесарь контрольно-измерительных приборов и автоматики",
    },
    {
      code: "15.01.17",
      speciality: "Электромеханик по торговому и холодильному оборудованию",
      qualification: "Электромеханик по торговому и холодильному оборудованию",
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  return (
    <>
      <Title>
        Выбор специальности{" "}
        <span style={{ fontSize: 24 }}>
          <Tooltip placement="bottom" title={tooltipContent}>
            <InfoCircleOutlined />
          </Tooltip>
        </span>
      </Title>

      <br />
      {loading ? (
        <span style={{ display: "flex", placeContent: "center", marginTop: "30vh" }}>
          <Spin size="large" />
        </span>
      ) : (
        <div className={style.flexContainer}>
          {mockMap.map(({ code, speciality, qualification }) => (
            <SpecialtyCard
              key={qualification + code}
              code={code}
              speciality={speciality}
              qualification={qualification}
            />
          ))}
        </div>
      )}
    </>
  );
}
