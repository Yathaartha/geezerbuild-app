import React from "react";
import Header from "../../components/layout/Header";
import LoginForm from "../../components/login/LoginForm";
import Footer from "../../components/layout/Footer";

const LoginPage = () => {
  return (
    <div>
      <Header title="Login Page For Students" />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
