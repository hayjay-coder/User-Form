import React, { useState } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import '../UserForm/styles.css';

const UserTable = (props) => {
  const [searchText, setSearchText] = useState("")

  let searchInput;
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
  });

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0])
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("")
  };
    const columns = [
      {
        title: 'First Name',
        dataIndex: 'firstname',
        key: 'firstname',
        ...getColumnSearchProps('firstname'),
      },
      {
        title: 'Last Name',
        dataIndex: 'lastname',
        key: 'lastname',
        ...getColumnSearchProps('lastname'),
      },
      {
        title: 'BirthDay',
        dataIndex: 'birthday',
        key: 'birthday',
        ...getColumnSearchProps('birthday'),
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        ...getColumnSearchProps('age'),
      },
      {
        title: 'Hobby',
        dataIndex: 'hobby',
        key: 'hobby',
        ...getColumnSearchProps('hobby'),
      },
    ];
    return <div className="main-form">
    <h2 className="register-title">Users Record</h2>
    <Table columns={columns} dataSource={props.data} />
    </div>;
  }

export default UserTable;