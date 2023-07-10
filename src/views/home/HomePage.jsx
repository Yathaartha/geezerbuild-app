import React from "react";
import Header from "../../components/layout/Header";
import AssignmentsTable from "../../components/assignments/AssignmentsTable";
import Footer from "../../components/layout/Footer";

const HomePage = () => {
  return (
    <div>
      <Header title="Home Page" />
      <AssignmentsTable />
      <Footer />
    </div>
  );
};

export default HomePage;
