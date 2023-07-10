import React from "react";
import Header from "../../components/layout/Header";
import SubmissionsTable from "../../components/submissions/SubmissionsTable";

const SubmissionsPage = () => {
  return (
    <div>
      <Header title="Submissions Page" />
      <SubmissionsTable />
    </div>
  );
};

export default SubmissionsPage;
