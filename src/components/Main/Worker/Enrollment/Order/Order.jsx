import { Select, Radio, Space, Form, Button, Input, DatePicker } from "antd"
import locale from 'antd/es/date-picker/locale/ru_RU';
const { Option } = Select


export const Order = (props) => {

  return <>
    <div style={{ minHeight: '80vh', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <Form>
        <Space direction="vertical">

          <Input.Group compact>
            <Form.Item
              name="number"
              label=""
            >
              <Input style={{ width: '10vw' }} placeholder="№ Приказа" />
            </Form.Item>
            <Form.Item
              name="date"
              label=""
            >
              <DatePicker onChange={''} locale={locale} style={{ width: '10vw' }} />
            </Form.Item>
          </Input.Group>
          <Form.Item
            name="argument"
            label=""
            rules={[
              {
                required: true,
                message: "Это поле обязательно",
              },
            ]}
          >
            <Input style={{ width: '20vw' }} placeholder="Основание" />
          </Form.Item>
          <Form.Item
            name="fio"
            label=""
            rules={[
              {
                required: true,
                message: "Это поле обязательно",
              },
            ]}
          >
            <Input style={{ width: '20vw' }} placeholder="Кто подготовил" />
          </Form.Item>
          <Form.Item
            label=""
          >
            <Space>
              <Button type="primary" htmlType="submit"
              // disabled={!statement.date}
              >
                Коммерция
              </Button>
              <Button type="primary" htmlType="submit"
              // disabled={!statement.date}
              >
                Бюджет
              </Button>
            </Space>
          </Form.Item>
        </Space>
      </Form>
    </div>
  </>
}