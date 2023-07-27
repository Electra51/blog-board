import DashboardLayouts from "@/components/Layouts/DashboardLayouts";
import React from "react";

const AdminHomePage = () => {
  return <div>AdminHomePage</div>;
};

export default AdminHomePage;
AdminHomePage.getLayout = function getLayout(page) {
  return <DashboardLayouts>{page}</DashboardLayouts>;
};
