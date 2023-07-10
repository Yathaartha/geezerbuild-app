import React from "react";
import Header from "../../components/layout/Header";
import SubmissionsTable from "../../components/submissions/SubmissionsTable";
import Footer from "../../components/layout/Footer";

const SubmissionsPage = () => {
  return (
    <div>
      <Header title="Submissions Page" />
      <SubmissionsTable />
      <Footer />
    </div>
  );
};

export default SubmissionsPage;
