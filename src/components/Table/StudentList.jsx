import { useState } from "react";
import "antd/dist/antd.css";
import {
  Drawer,
  Table,
  Button,
  Popconfirm,
  Space,
  AutoComplete,
  Input,
} from "antd";

// const data = [
//   {
//     key: "0",
//     name: "John Brown qwewqe",
//     score: 3.4,
//     data: "Подтверждены",
//     success: "да",
//   },
//   {
//     key: "1",
//     name: "Jim Green wewqerqw",
//     score: 4.5,
//     data: "Подтверждены",
//     success: "нет",
//   },
//   {
//     key: "2",
//     name: "Joe Blackqw eqw",
//     score: 4.3,
//     data: "Не подтверждены",
//     success: "да",
//   },
//   {
//     key: "43",
//     name: "Jim Red wqeqwe",
//     score: 4.345,
//     data: "Подтверждены",
//     success: "да",
//   },
//   {
//     key: "4",
//     name: "Jim Red wqeqwe",
//     score: 3.234,
//     data: "Не подтверждены",
//     success: "да",
//   },
//   {
//     key: "5",
//     name: "Jim Red wqeqwe",
//     score: 5,
//     data: "Не подтверждены",
//     success: "нет",
//   },
// ];

export const StudentList = () => {
  const [profile, setProfile] = useState(<></>);
  const [visible, setVisible] = useState(false);
  let [records, setRecords] = useState([]);

  let [filteredInfo, setFilteredInfo] = useState({});
  let [sortedInfo, setSortedInfo] = useState({});

  let [data, setData] = useState([
    {
      key: "0",
      name: "John Brown qwewqe",
      score: 3.4,
      data: "Подтверждены",
      success: "да",
    },
    {
      key: "1",
      name: "Jim Green wewqerqw",
      score: 4.5,
      data: "Подтверждены",
      success: "нет",
    },
    {
      key: "2",
      name: "Joe Blackqw eqw",
      score: 4.3,
      data: "Не подтверждены",
      success: "да",
    },
    {
      key: "3",
      name: "Jim Red wqeqwe",
      score: 4.345,
      data: "Подтверждены",
      success: "да",
    },
    {
      key: "4",
      name: "Jim Red wqeqwe",
      score: 3.234,
      data: "Не подтверждены",
      success: "да",
    },
    {
      key: "5",
      name: "Jim Red wqeqwe",
      score: 5,
      data: "Не подтверждены",
      success: "нет",
    },
    {
      key: "6",
      name: "Jim Red wqeqwe",
      score: 5,
      data: "Не подтверждены",
      success: "нет",
    },
    {
      key: "7",
      name: "Jim Red wqeqwe",
      score: 5,
      data: "Не подтверждены",
      success: "нет",
    },
    {
      key: "8",
      name: "Jim Red wqeqwe",
      score: 5,
      data: "Не подтверждены",
      success: "нет",
    },
    {
      key: "9",
      name: "Jim Red wqeqwe",
      score: 5,
      data: "Не подтверждены",
      success: "нет",
    },
    {
      key: "10",
      name: "Jim Red wqeqwe",
      score: 5,
      data: "Не подтверждены",
      success: "нет",
    },
    {
      key: "11",
      name: "Jim Red wqeqwe",
      score: 5,
      data: "Не подтверждены",
      success: "нет",
    },
  ]);
  let [searchData, setSearchData] = useState(data);

  let columns = [
    {
      title: "ФИО",
      dataIndex: "name",
      key: "name",
      // filters: [
      //   { text: "Joe", value: "Joe" },
      //   { text: "Jim", value: "Jim" },
      // ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Средний Балл",
      dataIndex: "score",
      key: "score",
      sorter: (a, b) => a.score - b.score,
      sortOrder: sortedInfo.columnKey === "score" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Данные подтверждены",
      dataIndex: "data",
      key: "data",
      filters: [
        { text: "Подтверждены", value: "Подтверждены" },
        { text: "Не подтверждены", value: "Не подтверждены" },
      ],
      filteredValue: filteredInfo.data || null,
      onFilter: (value, record) => record.data.includes(value),
      sorter: (a, b) => a.data.length - b.data.length,
      sortOrder: sortedInfo.columnKey === "data" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Зачислен",
      dataIndex: "success",
      key: "success",
      filters: [
        { text: "Зачислен", value: "да" },
        { text: "Не зачислен", value: "нет" },
      ],
      filteredValue: filteredInfo.success || null,
      onFilter: (value, record) => record.success.includes(value),
      sorter: (a, b) => a.success.length - b.success.length,
      sortOrder: sortedInfo.columnKey === "success" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Кому сломать колени?",
      dataIndex: "operation",
      render: (_, record) => (
        <Space size="middle">
          {columns.length >= 1 ? (
            <span
              onClick={() => handleProfile(record)}
              style={{ color: "blue", cursor: "pointer" }}
            >
              Пофиль
            </span>
          ) : null}
          {columns.length >= 1 ? (
            <Popconfirm
              title="ТЫ ЧЕ ТУПОЙ?"
              onConfirm={() => handleDelete(record.key)}
            >
              <a>Удолить</a>
            </Popconfirm>
          ) : null}
        </Space>
      ),
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo((filteredInfo = filters));
    setSortedInfo((sortedInfo = sorter));
  };

  const clearFilters = () => {
    setFilteredInfo((filteredInfo = []));
  };

  const clearAll = () => {
    setFilteredInfo((filteredInfo = []));
    setSortedInfo((sortedInfo = []));
  };

  const setScoreSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "score",
    });
  };

  const handleProfile = (profile) => {
    setVisible(true);
    setProfile(
      <>
        <h1>Имя {profile.name}</h1>
        <p>Средний балл {profile.score}</p>
      </>
    );
  };

  const handleDeleteChecked = () => {
    // setData((data = data.filter((el) => el.key in records.key)));

    // setData(data = data.filter((el) => el.key !== records));
    for (let i = 0; i < records.length; i++) {
      setSearchData((searchData = searchData.filter((el) => el.key !== records[i])));
    }
    console.log(data);
    console.log(records);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setRecords((records = selectedRowKeys));
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
  };

  const handleDelete = (key) => {
    console.log(key);
    // setColumns((columns = columns.filter((el) => el.key !== key)));
    setSearchData((searchData = searchData.filter((el) => el.key !== key)));
  };

  const onSearch = (value) => {
    if (value.length) {
      setSearchData(
        (searchData = data.filter((el) => el.name.includes(value)))
      );
      console.log(searchData);
    } else { 
      setSearchData(searchData = data)
    }
  };

  return (
    <>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={setScoreSort}>Сортировать по сред. баллу</Button>
          <Button onClick={clearFilters}>Отчистить фильтры</Button>
          <Button onClick={clearAll}>Отчистить все фильтры и сортировки</Button>
          {/* <Popconfirm title="ТЫ ЧЕ deb?" onConfirm={handleDeleteChecked}> */}
          <Button onClick={handleDeleteChecked}>Сломать колени</Button>
          {/* </Popconfirm> */}
        </Space>
        <br />
        <Space style={{ marginBottom: 16 }}>
          <Input.Search
            onSearch={onSearch}
            size="middle"
            placeholder="Введите текс"
            enterButton
            allowClear
          />
        </Space>
        <Drawer
          width={500}
          title="Профиль"
          placement="right"
          closable={true}
          onClose={() => setVisible(false)}
          visible={visible}
        >
          {profile}
        </Drawer>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          pagination={{ position: ["none", "bottomCenter"] }}
          dataSource={searchData}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
