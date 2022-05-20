
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import { Radio, Space, Button, Form } from 'antd';
import { useState } from 'react';
// const locale = []

export const Requests = (props) => {
  const [statement, setStatement] = useState({
    date: '',
    base: 9
  })

  const handleChangeDate = (date, dateString) => {
    setStatement({ ...statement, date: dateString })
  }

  const handleChangeBase = (e) => {
    setStatement({ ...statement, base: e.target.value })
  }

  return <>
    <div style={{ minHeight: '80vh', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <Form>
        <Space direction="vertical">
          <Form.Item
            name="date"
            label=""
            rules={[
              {
                required: true,
                message: "Это поле обязательно",
              },
            ]}
          >
            <DatePicker onChange={handleChangeDate} locale={locale} style={{ width: '20vw' }} />
          </Form.Item>
          <Form.Item
            name="educ"
            label="Форма Обучения"
            rules={[
              {
                required: true,
                message: "Это поле обязательно",
              },
            ]}
          >
            <Radio.Group buttonStyle="solid" onChange={handleChangeBase} value={statement.base}>
              <Radio.Button value='Очное'>Очное</Radio.Button>
              <Radio.Button value='Заочное'>Заочное</Radio.Button>
            </Radio.Group>
          </Form.Item>
          {/* <div style={{ textAlign: 'center' }}> */}
          <Form.Item
            label=""
          >
            <Button type="primary" htmlType="submit"
            // disabled={!statement.date}
            >
              Печать
            </Button>
          </Form.Item>
          {/* </div> */}
        </Space>
      </Form>
    </div>
  </>;
};

