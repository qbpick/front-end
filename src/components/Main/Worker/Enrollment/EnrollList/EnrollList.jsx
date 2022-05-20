import { Select, Radio, Space, Form, Button } from "antd"
const { Option } = Select

export const EnrollList = (props) => {

  return <>
    <div style={{ minHeight: '80vh', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <Form>
        <Space direction="vertical">
          <Form.Item
            name="speciality"
            label=""
            rules={[
              {
                required: true,
                message: "Это поле обязательно",
              },
            ]}
          >
            <Select
              style={{ width: "20vw" }}
              showSearch
              placeholder="Специальность"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Сетевое и системное администрирование">Сетевое и системное администрирование и системное администрирование</Option>
              <Option value="Компьютерные системы и комплексы">Компьютерные системы и комплексы</Option>
              <Option value="Информационные системы и программирование">Информационные системы и программирование</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="qualification"
            label=""
            rules={[
              {
                required: true,
                message: "Это поле обязательно",
              },
            ]}
          >
            <Select
              style={{ width: "20vw" }}
              showSearch
              placeholder="Квалификация"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Техник по компьютерным системам">Техник по компьютерным системам</Option>
              <Option value="Сетевой и системный администратор">Сетевой и системный администратор</Option>
              <Option value="Программист">Программист</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="base"
            label="На базе"
            rules={[
              {
                required: true,
                message: "Это поле обязательно",
              },
            ]}
          >
            <Radio.Group buttonStyle="solid">
              <Radio.Button value={9}>9 классов</Radio.Button>
              <Radio.Button value={11}>11 классов</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label=""
          >
            <Button type="primary" htmlType="submit"
            // disabled={!statement.date}
            >
              Печать
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </div>
  </>
}