import { Button, Input, Modal, Form, Upload } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { submitAssignment } from "./assignmentSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AssignmentSubmissionForm = ({
  title,
  isModalOpen,
  handleOk,
  handleCancel,
  selectedAssignment,
}) => {
  const [cookies, setCookie] = useCookies(["userId"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { submission } = useSelector((state) => state.assignment);

  const onFinish = async (values) => {
    const response = await dispatch(
      submitAssignment({
        file: values.file,
        userId: cookies.userId,
        assignmentId: selectedAssignment.id,
      })
    );

    if (response) {
      toast("Assignment Submitted", {
        type: "success",
      });
      handleOk();
      navigate("/submissions");
    } else {
      toast("Assignment Submission Failed", {
        type: "error",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    toast("Assignment Submission Failed", {
      type: "error",
    });
    handleCancel();
  };

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}>
      <Form
        name="basic"
        layout="vertical"
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="Upload File"
          name="file"
          rules={[
            {
              required: true,
              message: "Please select file!",
            },
          ]}>
          <Upload name="file" action="/upload.do" listType="text">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AssignmentSubmissionForm;
