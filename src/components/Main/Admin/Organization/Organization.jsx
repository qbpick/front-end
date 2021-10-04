import { Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

export const Organization = (props) => {
  return (
    <>
      <Typography>
        <Title>Об организации</Title>
        <Title level={3}>Полное наименование</Title>
        <Paragraph>
          Государственное бюджетное профессиональное образовательное учреждение
          Астраханской области «Астраханский колледж вычислительной техники».
        </Paragraph>
        <Title level={3}>Официальное сокращение</Title>
        <Paragraph>ГБПОУ АО «АКВТ».</Paragraph>
        <Title level={3}>Место нахождения</Title>
        <Paragraph>
          Юридический: 414056, Астраханская область, г. Астрахань, переулок
          Смоляной, д. 2. <br />
          Почтовый адрес: 414011, Астраханская область, г.Астрахань, ул. К
          Комарова, д.55
        </Paragraph>
      </Typography>
    </>
  );
};
