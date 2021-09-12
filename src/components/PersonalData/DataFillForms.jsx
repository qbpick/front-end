import { Steps, Layout } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";
import { FullNameForm } from "./Forms/FullNameForm";
import { PassportForm } from "./Forms/PassportForm";
import { SchoolForm } from "./Forms/SchoolForm";
import { CertificateForm } from "./Forms/CertificateForm";
import { FamilyForm } from "./Forms/FamilyForm";

const { Sider, Content } = Layout;

const { Step } = Steps;

//Number(localStorage.getItem("current"))

export const DataFillForms = () => {
  let [current, setCurrent] = useState(0);
  let [steps] = useState([
    {
      title: "ФИО",
      content: <FullNameForm step={current} setStep={setCurrent} />,
      description: "ФИО и доп. телефон",
    },
    {
      title: "Паспорт",
      content: <PassportForm step={current} setStep={setCurrent} />,
      description: "Добавление паспортных данных",
    },
    {
      title: "Школа",
      content: <SchoolForm step={current} setStep={setCurrent} />,
      description: "Добавление данных о школе",
    },
    {
      title: "Аттестат",
      content: <CertificateForm step={current} setStep={setCurrent} />,
      description: "Добавление оценок из аттестата",
    },
    {
      title: "Семья",
      content: <FamilyForm step={current} setStep={setCurrent} />,
      description: "Данные о родителях",
    },
  ]);
  // DEV
  console.log(current);

  // Only for Dev delete on prod
  const handleStep = (target) => {
    setCurrent((current = target));
  };
  return (
    <>
      <Layout style={{ height: "100%" }}>
        <Sider theme="light" width={330} style={{ padding: 25 }}>
          <div
            style={{
              textAlign: "center",
              fontSize: 32,
              paddingBottom: 20,
            }}
          >
            Заполнение Данных
          </div>
          <Steps direction="vertical" current={current} onChange={handleStep}>
            {steps.map((el) => (
              <Step
                key={el.title}
                title={el.title}
                description={el.description}
              />
            ))}
          </Steps>
        </Sider>
        <Layout className="site-layout">
          <Content className="site-layout-background">
            <div
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "40%" }} className="steps-content">
                {steps[current].content}
              </div>
            </div>
            {/* <Footer style={{ textAlign: "center" }}>
              <div className="steps-action">
                {current > 0 && (
                  <Button
                    icon={<ArrowLeftOutlined />}
                    size="large"
                    style={{ margin: "0 8px" }}
                    onClick={handlePrevStep}
                  >
                    Назад
                  </Button>
                )}
                {current < steps.length - 1 && (
                  <Button size="large" type="primary" onClick={handleNextStep}>
                    Дальше <ArrowRightOutlined />
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    size="large"
                    type="primary"
                    loading={end ? true : false}
                    onClick={() => {
                      message.success("Все данные заполнены!");
                      setEnd(!end);
                      setTimeout(() => {
                        history.push("/im");
                      }, 1000);
                    }}
                  >
                    Завершить {!end && <CheckOutlined />}
                  </Button>
                )}
              </div>
            </Footer> */}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
