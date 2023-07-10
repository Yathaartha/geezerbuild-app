import React from "react";
import { Button, Form, Input } from "antd";
import { FormContainer } from "./LoginForm.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAsync } from "./authSlice";
import { toast } from "react-toastify";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await dispatch(
        loginAsync({ username: values.username, password: values.password })
      );

      if (response.payload.data) {
        toast("Login Success", {
          type: "success",
        });
        navigate("/");
      } else {
        toast("Invalid Credentials", {
          type: "error",
        });
      }
    } catch (error) {
      toast("Invalid Credentials", {
        type: "error",
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FormContainer>
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
