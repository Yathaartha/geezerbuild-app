import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssignments } from "./assignmentSlice";
import { Space, Table } from "antd";
import { TableTitle } from "./AssignmentsTable.css";

const AssignmentsTable = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.assignment);

  useEffect(() => {
    dispatch(getAssignments());
  }, []);

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    {
      title: "Detail",
      dataIndex: "detail",
      key: "detail",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
      render: (dueDate) => (
        <span>{new Date(dueDate).toLocaleDateString()}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Submit</a>
        </Space>
      ),
    },
  ];

  const renderTable = () => {
    return <Table columns={columns} dataSource={list} />;
  };

  return (
    <div>
      <TableTitle>Assignments Table</TableTitle>
      {renderTable()}
    </div>
  );
};

export default AssignmentsTable;
