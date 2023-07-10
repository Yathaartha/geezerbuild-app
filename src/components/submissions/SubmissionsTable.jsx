import React, { useEffect, useState } from "react";
import { Modal, Space, Table } from "antd";
import { getSubmissions, removeSubmission } from "./submissionSlice";
import { TableTitle } from "../assignments/AssignmentsTable.css";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const SubmissionsTable = () => {
  const [cookies, setCookies] = useCookies(["userId"]);
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
  const { list } = useSelector((state) => state.submission);

  useEffect(() => {
    dispatch(getSubmissions({ studentId: cookies.userId }));
  }, []);

  const deleteSubmission = async () => {
    const response = await dispatch(
      removeSubmission({ assignmentId: selectedAssignment.id })
    );

    if (response) {
      toast("Assignment Deleted", {
        type: "success",
      });
      await dispatch(getSubmissions({ studentId: cookies.userId }));
      handleOk();
    } else {
      toast("Assignment Deletion Failed", {
        type: "error",
      });
    }
  };

  const columns = [
    {
      title: "S.N.",
      dataIndex: "num",
      key: "num",
      render: (text, record, index) => index + 1 + ".",
    },
    { title: "Title", dataIndex: "title", key: "title" },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
      render: (dueDate) => (
        <span>{new Date(dueDate).toLocaleDateString()}</span>
      ),
    },
    {
      title: "Submitted File",
      dataIndex: "file",
      key: "file",
      render: (file) => (
        //download file
        <a href={file} download>
          Download
        </a>
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
            Delete
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
      <TableTitle>Submissions Table</TableTitle>
      {renderTable()}
      <Modal
        title="Delete Submission"
        open={isModalOpen}
        onOk={deleteSubmission}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default SubmissionsTable;
