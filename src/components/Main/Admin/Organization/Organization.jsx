import { Typography } from "antd";
import { useState } from "react";
const { Title, Paragraph } = Typography;

export const Organization = (props) => {
  const [editableStr, setEditableStr] = useState("");
  const onEnd = () => console.log(editableStr);

  return (
    <>
      <Typography>
        <Title>
          Об организации
          {/* <Tooltip title="Изменить">
            <Button shape="circle" icon={<EditTwoTone />} />
          </Tooltip> */}
        </Title>
        <Title level={3}>Полное наименование</Title>
        <Paragraph
          editable={{
            tooltip: "Изменить",
            onChange: setEditableStr,
            onEnd,
          }}
        >
          Государственное бюджетное профессиональное образовательное учреждение
          Астраханской области «Астраханский колледж вычислительной техники».
        </Paragraph>
        <Title level={3}>Официальное сокращение</Title>
        <Paragraph
          editable={{
            tooltip: "Изменить",
            onChange: setEditableStr,
            onEnd,
          }}
        >
          ГБПОУ АО «АКВТ».
        </Paragraph>
        <Title level={3}>Место нахождения</Title>
        <Paragraph
          editable={{
            tooltip: "Изменить",
            onChange: setEditableStr,
            onEnd,
          }}
        >
          Юридический: 414056, Астраханская область, г. Астрахань, переулок
          Смоляной, д. 2. <br />
          Почтовый адрес: 414011, Астраханская область, г.Астрахань, ул. К
          Комарова, д.55
        </Paragraph>
      </Typography>
    </>
  );
};
