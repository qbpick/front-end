import { useState } from "react";
import "antd/dist/antd.css";
import { Table, Button, Popconfirm, Space, Input, Modal } from "antd";
import { AddWorker } from "./AddWorker/AddWorker";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const data = [
  {
    key: "0",
    name: "John Brown qwewqe",
    position: "Секретарь"
  },
  {
    key: "1",
    name: "Jim Green wewqerqw",
    position: "Секретарь"
  },
  {
    key: "2",
    name: "Joe Blackqw eqw",
    position: "Помощник секретаря",
  },
  {
    key: "43",
    name: "Jim Red wqeqwe",
    position: "Помощник секретаря",
  },
  {
    key: "4",
    name: "Jim Red wqeqwe",
    position: "Помощник секретаря",
  },
  {
    key: "5",
    name: "Jim Red wqeqwe",
    position: "Секретарь"
  },
];

export const Workers = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchData, setSearchData] = useState(data);

  const columns = [
    {
      title: "ФИО",
      dataIndex: "name",
      key: "name",
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Должность",
      dataIndex: "position",
      key: "position",
      filteredValue: filteredInfo.success || null,
      onFilter: (value, record) => record.position.includes(value),
      sorter: (a, b) => a.position.length - b.position.length,
      sortOrder: sortedInfo.columnKey === "position" && sortedInfo.order,
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

  return (
    <>
      <div style={{ margin: "0 auto" }}>
        <Space style={{ marginBottom: 16 }}>
          <Input.Search
            onSearch={onSearch}
            size="middle"
            placeholder="Поиск работника"
            enterButton
            allowClear
          />
          <Button onClick={sortPersonalDate}>Сортировать по ФИО</Button>
          <Button onClick={clearAllFilters}>Отчистить все фильтры</Button>
          <AddWorker />
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
        {/* <Space style={{ marginBottom: 16 }}>
        </Space> */}
        <Table
          rowSelection={rowSelection}
          columns={columns}
          pagination={{ position: ["none", "bottomRight"] }}
          dataSource={searchData}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
