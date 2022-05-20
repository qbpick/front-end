import { Button, Input, Modal, Popconfirm, Space, Table } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { AddQuotas } from "./AddQuotas/AddQuotas";

const data = [
  {
    key: "0",
    name: "John Brown qwewqe",
    position: "Секретарь",
    code: "09.02.01",
    speciality: "Компьютерные системы и комплексы",
    qualification: "Техник по компьютерным системам",
    places: 15
  },
  {
    key: "1",
    name: "Jim Green wewqerqw",
    position: "Секретарь",
    code: "09.02.01",
    speciality: "Компьютерные системы и комплексы",
    qualification: "Техник по компьютерным системам",
    places: 15
  },
  {
    key: "2",
    name: "Joe Blackqw eqw",
    position: "Помощник секретаря",
    code: "09.02.01",
    speciality: "Компьютерные системы и комплексы",
    qualification: "Техник по компьютерным системам",
    places: 15
  },
  {
    key: "43",
    name: "Jim Red wqeqwe",
    position: "Помощник секретаря",
    code: "09.02.01",
    speciality: "Компьютерные системы и комплексы",
    qualification: "Техник по компьютерным системам",
    places: 15
  },
  {
    key: "4",
    name: "Jim Red wqeqwe",
    position: "Помощник секретаря",
    code: "09.02.01",
    speciality: "Компьютерные системы и комплексы",
    qualification: "Техник по компьютерным системам",
    places: 15
  },
  {
    key: "5",
    name: "Jim Red wqeqwe",
    position: "Секретарь",
    code: "09.02.01",
    speciality: "Компьютерные системы и комплексы",
    qualification: "Техник по компьютерным системам",
    places: 15
  },
  {
    key: "6",
    name: "Jim Red wqeqwe",
    position: "Секретарь",
    code: "09.02.01",
    speciality: "Компьютерные системы и комплексы",
    qualification: "Техник по компьютерным системам",
    places: 15
  },
  {
    key: "7",
    name: "Jim Red wqeqwe",
    position: "Секретарь",
    code: "09.02.01",
    speciality: "Компьютерные системы и комплексы",
    qualification: "Техник по компьютерным системам",
    places: 15
  },
  {
    key: "8",
    name: "Jim Red wqeqwe",
    position: "Секретарь",
    code: "09.02.01",
    speciality: "Компьютерные системы и комплексы",
    qualification: "Техник по компьютерным системам",
    places: 15
  },
  {
    key: "9",
    name: "Jim Red wqeqwe",
    position: "Секретарь",
    code: "09.02.01",
    speciality: "Компьютерные системы и комплексы",
    qualification: "Техник по компьютерным системам",
    places: 15
  },
  {
    key: "10",
    name: "Jim Red wqeqwe",
    position: "Секретарь",
    code: "09.02.01",
    speciality: "Компьютерные системы и комплексы",
    qualification: "Техник по компьютерным системам",
    places: 15
  },
];

export const Quotas = (props) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchData, setSearchData] = useState(data);

  const columns = [
    {
      title: "Код",
      dataIndex: "code",
      key: "code",
      filteredValue: filteredInfo.code || null,
      onFilter: (value, record) => record.code.includes(value),
      sorter: (a, b) => a.code.localeCompare(b.code),
      sortOrder: sortedInfo.columnKey === "code" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Специальность",
      dataIndex: "speciality",
      key: "speciality",
      filteredValue: filteredInfo.success || null,
      onFilter: (value, record) => record.speciality.includes(value),
      sorter: (a, b) => a.speciality.length - b.speciality.length,
      sortOrder: sortedInfo.columnKey === "speciality" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Квалификация",
      dataIndex: "qualification",
      key: "qualification",
      filteredValue: filteredInfo.success || null,
      onFilter: (value, record) => record.qualification.includes(value),
      sorter: (a, b) => a.qualification.length - b.qualification.length,
      sortOrder: sortedInfo.columnKey === "qualification" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Места",
      dataIndex: "places",
      key: "places",
      filteredValue: filteredInfo.success || null,
      onFilter: (value, record) => record.places.includes(value),
      sorter: (a, b) => a.places.length - b.places.length,
      sortOrder: sortedInfo.columnKey === "places" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Действия",
      dataIndex: "operation",
      render: (_, record) => (
        <Space size="middle">
          {columns.length >= 1 ? (
            <Popconfirm
              title="Вы уверены?"
              cancelText="Отменить"
              okText="Да"
              onConfirm={() => handleDelete(record.key)}
            >
              <a>Удалить</a>
            </Popconfirm>
          ) : null}
        </Space>
      ),
    },
  ];


  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearAllFilters = () => {
    setFilteredInfo([]);
    setSortedInfo([]);
  };

  const sortPersonalDate = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "name",
    });
  };

  const handleDelete = (key) => {
    setSearchData(searchData.filter((el) => el.key !== key));
  };

  const handleDeleteSelected = () => {
    Modal.confirm({
      title: "Удаление",
      icon: <ExclamationCircleOutlined />,
      centered: true,
      content: `Вы уверены, что хотите удалить ${selectedRows.length} сотрудника(ов)?`,
      okText: "Подтвердить",
      cancelText: "Отменить",
      onOk: () => {
        let deleteSelected = [...searchData];
        for (const key of selectedRows) {
          deleteSelected = deleteSelected.filter((el) => el.key !== key);
        }
        setSearchData(deleteSelected);
        selectedRows.length = 0;
      },
    });
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`);
      setSelectedRows(selectedRowKeys);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
  };

  const onSearch = (value) => {
    if (value.length) {
      setSearchData(
        data.filter((el) => el.name.toLocaleLowerCase().includes(value))
      );
    } else {
      setSearchData(data);
    }
  };


  return <>
    <div style={{ margin: "0 auto" }}>
      <Space style={{ marginBottom: 16 }}>
        <Input.Search
          onSearch={onSearch}
          size="middle"
          placeholder="Поиск специальности"
          enterButton
          allowClear
        />
        {/* <Button onClick={sortPersonalDate}>Сортировать по ФИО</Button> */}
        <Button onClick={clearAllFilters}>Отчистить все фильтры</Button>
        <AddQuotas />
        {!!selectedRows.length && (
          <Button
            disabled={!selectedRows.length}
            danger
            onClick={handleDeleteSelected}
          >
            Удалить выделенных
          </Button>
        )}
      </Space>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        pagination={{ position: ["none", "bottomCenter"] }}
        dataSource={searchData}
        onChange={handleChange}
      />
    </div>
  </>
}