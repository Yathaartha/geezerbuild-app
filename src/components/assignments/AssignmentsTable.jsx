import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AssignmentSlice, { getAssignments } from "./assignmentSlice";
import { Modal, Space, Table } from "antd";
import { TableTitle } from "./AssignmentsTable.css";
import AssignmentSubmissionForm from "./AssignmentSubmissionForm";

const AssignmentsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.assignment);

  useEffect(() => {
    dispatch(getAssignments());
  }, []);

  const columns = [
    {
      title: "S.N.",
      dataIndex: "num",
      key: "num",
      render: (text, record, index) => index + 1 + ".",
    },
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
          <a
            onClick={(e) => {
              e.preventDefault();
              setSelectedAssignment(record);
              showModal();
            }}>
            Submit
          </a>
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
      <AssignmentSubmissionForm
        isModalOpen={isModalOpen}
        title="Submit Your Assignment"
        handleOk={handleOk}
        handleCancel={handleCancel}
        selectedAssignment={selectedAssignment}
      />
    </div>
  );
};

export default AssignmentsTable;
