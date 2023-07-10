import React from "react";
import Header from "../../components/layout/Header";
import AssignmentsTable from "../../components/assignments/AssignmentsTable";

const HomePage = () => {
  return (
    <div>
      <Header title="Home Page" />
      <AssignmentsTable />
    </div>
  );
};

export default HomePage;
