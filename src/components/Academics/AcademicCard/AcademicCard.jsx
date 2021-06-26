import { Card, Layout } from "antd";

const { Meta } = Card;

export const AcademicCard = ({}) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 420, margin: 25 }}
        cover={
          <img
            alt=""
            src="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340"
          />
        }
      >
        <Meta title="Предмет окда" description="Ну типа чета о предмете окда" />
      </Card>
    </>
  );
};
